import { MouseEventHandler, ReactElement, useEffect, useState } from 'react';
import LeftPanel from './LeftPanel';

interface SplitViewProps {
  left: ReactElement;
  right: ReactElement;
}

function SplitView({ left, right }: SplitViewProps) {
  const [leftWidth, setLeftWidth] = useState<number | undefined>();
  const [windowWidth, setWindowWidth] = useState<number | undefined>(
    window.innerWidth
  );
  const [separatorXPosition, setSeparatorXPosition] = useState<
    number | undefined
  >();
  const [dragging, setDragging] = useState(false);

  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    setSeparatorXPosition(e.clientX);
    setDragging(true);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (dragging && leftWidth && separatorXPosition) {
      const newLeftWidth = leftWidth + e.clientX - separatorXPosition;
      setSeparatorXPosition(e.clientX);
      setLeftWidth(newLeftWidth);
    }
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  const onWindowResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    window.addEventListener('resize', onWindowResize);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', onWindowResize);
    };
  });

  useEffect(() => {
    if (windowWidth) {
      setLeftWidth(windowWidth / 2);
    }
  }, [windowWidth]);

  return (
    <div className="h-screen flex items-start w-screen">
      <LeftPanel width={leftWidth} setWidth={setLeftWidth}>
        {left}
      </LeftPanel>
      <div
        className="h-screen border-2 p-0.5 bg-gray-600 border-gray-600 cursor-col-resize"
        onMouseDown={onMouseDown}
      />
      <div className="flex-1 p-2 unreset">{right}</div>
    </div>
  );
}

export default SplitView;
