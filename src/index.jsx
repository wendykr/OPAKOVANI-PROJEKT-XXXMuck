import ReactDOM from 'react-dom/client'
import './index.scss';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { App } from './App.jsx';
import { HomePage } from './pages/HomePage/HomePage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  ),
  { basename: "/OPAKOVANI-PROJEKT-XXXMuck" }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);