import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <h2>TEMPLATE_PROJECT</h2>
      <h1>Main Page</h1>
      <Link to="/error">
        <h2>Go to Error Page</h2>
      </Link>
      <Link to="/random">
        <h2>Go to Random Page (prepared...)</h2>
      </Link>
    </>
  );
};

export default MainPage;
