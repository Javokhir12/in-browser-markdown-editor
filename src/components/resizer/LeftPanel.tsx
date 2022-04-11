import { ReactNode, useEffect, useRef } from 'react';

interface LeftPanelProps {
  width: number | undefined;
  setWidth: (value: number) => void;
  children: ReactNode;
}

function LeftPanel({ width, setWidth, children }: LeftPanelProps) {
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (leftRef.current) {
      if (!width) {
        setWidth(leftRef.current?.clientWidth);
        return;
      }

      leftRef.current.style.width = `${width}px`;
    }
  }, [width, leftRef, setWidth]);

  return (
    <div className="h-full" ref={leftRef}>
      {children}
    </div>
  );
}

export default LeftPanel;
