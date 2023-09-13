import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <h2>TEMPLATE_PROJECT</h2>
      <h1>Error Page</h1>
      <Link to="/main">
        <h2>Go to Main Page</h2>
      </Link>
    </>
  );
};

export default ErrorPage;
