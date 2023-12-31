import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './components/layout/Main.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Blog from './components/Blog/Blog';
import AuthProvider from './provider/AuthProvider.jsx';
import ChefRecipes from './components/ChefRecipes/ChefRecipes.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import Error from './Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/chefrecipes/:id",
        element: <PrivateRoutes><ChefRecipes></ChefRecipes></PrivateRoutes>,
        loader: ({params}) => fetch(`https://chef-recipe-serverside-shefatahmed.vercel.app/data/${params.id}`)
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
