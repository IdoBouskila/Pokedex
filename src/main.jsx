import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
      <ReactQueryDevtools />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
