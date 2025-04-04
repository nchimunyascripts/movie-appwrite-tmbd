import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Signup from "./components/Signup.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    },
    {
        path: "/login",
        element: <App />,
        children: [
            {
                path: "/login",
                element: <Login />
            }
        ]
    },
    {
        path: "/signup",
        element: <App />,
        children: [
            {
                path: "/signup",
                element: <Signup />
            }
        ]
    }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
