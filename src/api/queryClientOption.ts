import { MutationCache, QueryCache } from '@tanstack/react-query';

const queryClientOption = {
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000 * 20,
      cacheTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
    mutations: {},
  },
  queryCache: new QueryCache({
    onSuccess: (data, query) => {
      console.log('SUCCESS', { data, query });
      const message = query?.meta?.successMessage;
      if (message) {
        console.log(message);
      }
    },
    onError: (error, query) => {
      console.log('ERROR', { error, query });
      const message = query?.meta?.errorMessage;
      if (message) {
        console.log(message);
      }
    },
  }),
  mutationCache: new MutationCache({
    onSuccess: (data, query) => {
      console.log('SUCCESS', { data, query });
    },
    onError: (error, query) => {
      console.log('ERROR', { error, query });
    },
  }),
};

export default queryClientOption;
