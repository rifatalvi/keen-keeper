import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/Router';
import FriendsProps from './context/FriendsProps';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsProps>
     <RouterProvider router={router} />,
     <ToastContainer />
    </FriendsProps>
  </StrictMode>,
)
