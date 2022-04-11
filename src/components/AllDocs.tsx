import { Link } from 'react-router-dom';
import { IAppContext, useAppContextValue } from '../context/AppContext';

function AllDocs() {
  const { markdowns } = useAppContextValue() as IAppContext;
  if (markdowns.length === 0)
    return (
      <h2 className="text-center font-semibold text-xl">Nothing to show</h2>
    );
  return (
    <div>
      {markdowns.map((m) => {
        return (
          <Link
            to={`/my-docs/${m.id}`}
            key={m.id}
            className="block m-2 text-orange-500"
          >
            {m.label}
            {m.id}
          </Link>
        );
      })}
    </div>
  );
}

export default AllDocs;
