import { useState, useEffect } from 'react';
import './ProductPage.scss';
import { Button } from '../../components/Button/Button';
import { useParams } from 'react-router-dom';

export const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const { productId } = useParams();
  const productData = products.find((product) => product.id == productId);

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
    <main className="productPage">
    {
      isLoading ?
        <>Loading data...</>
      : error ?
        <>{error}</>
      :
        <>
          <img src={productData.image} className="productPage__image"/>
          <div className="productPage__container">
            <h2 className="productPage__title">{productData.name}</h2>
            <Button />
          </div>
        </>
    }
    </main>
  )
}