import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="flex flex-col items-center h-screen">
      <h1 className="text-5xl mt-40 mb-8">Welcome to MD2.0</h1>
      <Link
        to="/new"
        className="text-sm ml-3 text-gray-300 bg-orange-500 rounded-sm p-3"
      >
        Create new markdown
      </Link>
    </div>
  );
}

export default About;
