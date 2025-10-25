import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {

  RouterProvider,
} from "react-router-dom";
import router from './MainRouter.jsx';
import AuthProvider from './Firebase + Authentication/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
    <RouterProvider router={router} />
</AuthProvider>
  </StrictMode>,
)
