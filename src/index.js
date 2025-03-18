import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesesPage from './pages/ServicesesPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
const myRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/about",
      element:<AboutPage/>
    },
    {
      path:"/service",
      element:<ServicesesPage/>
    },
    {
      path:"/news",
      element:<NewsPage/>
    },
    {
      path:"/contact",
      element:<ContactPage/>
    }
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={myRouter}/>
  </React.StrictMode>
);
