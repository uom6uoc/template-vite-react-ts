type NodeMode = 'dev' | 'stg' | 'prod';

const env = {
  dev: {
    BASE_API_URL: 'http://localhost:4000/',
  },
  stg: {
    BASE_API_URL: 'http://localhost:4000/',
  },
  prod: {
    BASE_API_URL: 'http://localhost:4000/',
  },
};

const config = env[import.meta.env.MODE as NodeMode];

export const { BASE_API_URL } = config;
