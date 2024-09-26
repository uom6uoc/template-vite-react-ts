import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

import queryClientOption from '~/api/queryClientOption';
import { TOAST } from '~/app/constant';
import GlobalStyle from '~/app/GlobalStyle';
import AppRouter from '~/app/Router';

import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient(queryClientOption);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ToastContainer
          theme={TOAST.theme}
          autoClose={TOAST.autoClose}
          limit={TOAST.limit}
        />
        <AppRouter />
      </QueryClientProvider>
    </>
  );
};

export default App;
