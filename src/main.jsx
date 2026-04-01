import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Routes/Router.jsx'
import { RouterProvider } from 'react-router'
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast'
import AuthProvider from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
