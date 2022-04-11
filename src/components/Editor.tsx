import { ChangeEventHandler, useState } from 'react';

interface EditorProps {
  markdown: string;
  setMarkdown: (content: string) => void;
}

function Editor({ setMarkdown, markdown }: EditorProps) {
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <textarea
      className="w-full h-full p-2 bg-gray-800 border-1 outline-none focus:border-gray-400"
      onChange={handleChange}
      defaultValue={markdown}
    ></textarea>
  );
}

export default Editor;
