import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Router'
import { RouterProvider } from 'react-router-dom'
import AuthProviders from './Providers/AuthProviders/AuthProviders'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>,
)
