import {useState, useEffect} from 'react';
import './HomePage.scss';
import { ProductList } from '../../components/ProductList/ProductList';

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://apps.kodim.cz/react-2/xxxmuck/products');
        if (!response.ok) {
          if (response.status === 400) {
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
          return;
        }
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
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
          <div>
            Loading data ...
          </div>
        :
          <ProductList products={products} />
      }
    </main>
  );
};
