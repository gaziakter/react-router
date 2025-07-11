import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import About from './components/Pages/About.jsx'
import Contact from './components/Pages/Contact.jsx'
import Product from './components/Pages/Product.jsx'
import Info from './components/Info/Info.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element: <App></App>,
    children: [
          {
    path: '/about',
    element: <About></About>
  },
  {
    path: '/contact',
    element: <Contact></Contact>
  },
    {
    path: '/product',
    loader: () => fetch('https://fakestoreapi.com/products'),
    element: <Product></Product>
  },
      {
    path: '/product/:productID',
    loader: ({params}) => fetch(`https://fakestoreapi.com/products/${params.productID}`),
    element: <Info></Info>
  }
    ]
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}></RouterProvider>
  </React.StrictMode>,
)
