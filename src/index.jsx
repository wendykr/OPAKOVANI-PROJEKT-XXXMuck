import ReactDOM from 'react-dom/client'
import { HomePage } from './pages/HomePage/HomePage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/product/:productId',
        element: <ProductPage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
], {
  basename: "/OPAKOVANI-PROJEKT-XXXMuck"
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);