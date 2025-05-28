import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home'
import ErrorPage from './components/ErrorPage.jsx'
import CategoryPage from './pages/category/CategoryPage.jsx'
import Search from './pages/Search.jsx'
import SingleProduct from './pages/products/singleProduct.jsx'
import Recipes from './pages/products/Recipes.jsx'
import About from './pages/about/About.jsx'
import Contact from './pages/contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/categorias/:category',
        element: <CategoryPage />,
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path:"/items/:id",
        element: <SingleProduct />,
        loader: ({ params }) => fetch(`https://bollitosdecanela.vercel.app/api/items/${params.id}`)
      },
      {
        path: "/recetas",
        element: <Recipes />,
      },
      {
        path: '/sobre-nosotros',
        element: <About />
      },
      {
        path: 'contacto',
        element: <Contact />
      }
      /* quizás aquí iría algo como noticias o entradas del blog, implementar más tarde */
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
