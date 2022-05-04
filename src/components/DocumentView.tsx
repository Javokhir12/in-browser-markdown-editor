import ReactMarkdown from 'react-markdown';
import SplitView from './resizer/SplitView';
import Editor from './Editor';
import remarkGfm from 'remark-gfm';
import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocaleStorage';
import { useParams } from 'react-router-dom';
import { IAppContext, useAppContextValue } from '../context/AppContext';

function DocumentView() {
  const { docId } = useParams();
  const { markdowns } = useAppContextValue() as IAppContext;
  const currentMarkdown = markdowns.find((m) => `${m.id}` === docId);
  const [markdown, setMarkdown] = useLocalStorage(
    `md-${currentMarkdown?.id}`,
    currentMarkdown?.content
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

export default DocumentView;
