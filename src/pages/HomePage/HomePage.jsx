import {useState, useEffect} from 'react';
import './HomePage.scss';
import { ProductList } from '../../components/ProductList/ProductList';

export const HomePage = () => {
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
    <main className="home">
      <h1 className="home__title">Aktuální nabídka</h1>
      <div className="home__container">
        <p className="home__text">Nejnovější prémiové produkty od předních českých designérů.</p>
        <p className="home__text">Doprava zdarma až k vám domů, na cenu nehleďte.</p>
      </div>
      {
        isLoading ?
          <div>Loading data ...</div>
        : error ? 
          <div>{error}</div>
        : 
          <ProductList products={products} />
      }
    </main>
  );
};
