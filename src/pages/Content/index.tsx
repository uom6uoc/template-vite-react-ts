import * as React from 'react';
import { json, useLoaderData } from 'react-router-dom';
import type { LoaderFunction } from 'react-router-dom';

type LoaderData = {
  id: string;
};

const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  if (id === undefined) return;

  return json<{ id: string }>({ id });
};

export { loader };

const Content: React.FC = () => {
  const data = useLoaderData() as LoaderData | undefined;

  return (
    <div>
      <h1>Content Page</h1>
      <h3>{data?.id}</h3>
    </div>
  );
};

export default Content;
