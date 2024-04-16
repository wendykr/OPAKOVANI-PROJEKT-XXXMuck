import ReactDOM from 'react-dom/client'
import './index.scss';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { App } from './App.jsx';
import { HomePage } from './pages/HomePage/HomePage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

let error = null;
let isLoading = true;

const fetchProducts = async () => {
  try {
    const response = await fetch('https://apps.kodim.cz/react-2/xxxmuck/products');
    if (!response.ok) {
      if (response.status === 400) {
        error = 'Load data error';
        isLoading = false;
      } else {
        error = 'Load data error';
        isLoading = false;
      }
      return;
    }
    const data = await response.json();
    const products = data;
    isLoading = false;
    return products;
  } catch (err) {
    error = 'Load data error';
    isLoading = false;
  }
};

const productData = await fetchProducts();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="/"
        element={
          <HomePage
            products={productData}
            isLoading={isLoading}
            error={error}
          />
        }
      />
      <Route
        path="/product/:productId"
        element={
          <ProductPage
            products={productData}
            isLoading={isLoading}
            error={error}
          />
        }
      />
      <Route
        path="*"
        element={<ErrorPage />}
      />
    </Route>
  ),
  { basename: "/OPAKOVANI-PROJEKT-XXXMuck" }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);