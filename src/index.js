import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PersistentDrawerLeft from './component/Table';
import LoginPage from "./component/LoginPage";
import SignUp from "./component/SignUp";
import TablePage from './component/Table';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/table",
    element: <TablePage/>,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
