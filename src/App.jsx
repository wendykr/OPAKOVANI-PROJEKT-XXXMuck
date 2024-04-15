import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { useState, useEffect } from 'react';

export const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://apps.kodim.cz/react-2/xxxmuck/products');
        if (!response.ok) {
          if (response.status === 400) {
            setError('Load data error');
            setIsLoading(false);
          } else {
            setError('Load data error');
            setIsLoading(false);
          }
          return;
        }
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        setError('Load data error');
        setIsLoading(false);
        console.error('Chyba při spojení s API:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <Header />
      <Outlet products={products} isLoading={isLoading} error={error} />
    </div>
  );
};