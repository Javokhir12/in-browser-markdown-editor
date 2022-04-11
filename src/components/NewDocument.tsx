import ReactMarkdown from 'react-markdown';
import SplitView from './resizer/SplitView';
import Editor from './Editor';
import remarkGfm from 'remark-gfm';
import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocaleStorage';

function NewDocumentView() {
  const [markdown, setMarkdown] = useLocalStorage(
    'markdown',
    `## MARKDOWN is a \`in-browser\` markdown editor.

  👉 Changes are re-rendered as you type.

  👈 Try writing some markdown on the left.`
  );

  useEffect(() => {
    return () => window.localStorage.removeItem('markdown');
  }, []);

  const Preview = (
    <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
  );
  const MarkdownEditor = (
    <Editor markdown={markdown} setMarkdown={setMarkdown} />
  );
  return (
    <div>
      <SplitView left={MarkdownEditor} right={Preview} />
    </div>
  );
}

export default NewDocumentView;
