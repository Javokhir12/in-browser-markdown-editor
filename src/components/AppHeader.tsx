import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import {
  IAppContext,
  Markdown,
  useAppContextValue,
} from '../context/AppContext';

function AppHeader() {
  const showButtons = !['/', '/my-docs'].includes(useLocation().pathname);
  const { setMarkdowns } = useAppContextValue() as IAppContext;
  const navigate = useNavigate();
  const saveMarkdown = () => {
    const item = window.localStorage.getItem('markdown');
    const content = item ? JSON.parse(item) : '';
    setMarkdowns((mds) => [
      ...mds,
      { id: Date.now(), label: `md-${Date.now()}`, content },
    ]);
    navigate('/my-docs');
  };

  return (
    <nav className="h-12 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="m-2">
          <span className="font-bold mx-2">MD2.0</span>
        </Link>
        <Link to="/my-docs">
          <span className="font-bold mx-2">My Docs</span>
        </Link>
        <Link
          to="/new"
          className="text-sm ml-3 text-gray-300 bg-orange-500 rounded-sm px-2 py-1"
          onClick={saveMarkdown}
        >
          <i className="fa-solid fa-plus mr-2"></i>
          <span className="font-semibold">Create</span>
        </Link>
      </div>
      <div className="flex items-center mr-4">
        {showButtons && (
          <>
            <i className="fa-solid fa-trash-can text-gray-500 text-base cursor-pointer"></i>
            <button
              className="text-sm ml-3 text-gray-300 bg-orange-500 rounded-sm px-2 py-1"
              onClick={saveMarkdown}
            >
              <i className="fa-solid fa-floppy-disk mr-2"></i>
              <span className="font-semibold">Save</span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default AppHeader;
