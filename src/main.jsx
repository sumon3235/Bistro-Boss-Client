import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routes/Router.jsx'
import { RouterProvider } from 'react-router'
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast'
import AuthProvider from './context/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
          <Toaster
            position="top-right"
            reverseOrder={false}
            containerStyle={{
              top: 70,
            }}
          />
        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
