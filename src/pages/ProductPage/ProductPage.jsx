import { useState, useEffect } from 'react';
import './ProductPage.scss';
import { Button } from '../../components/Button/Button';
import { useParams } from 'react-router-dom';

export const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { productId } = useParams();
  const productData = products.find((product) => product.id == productId);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://apps.kodim.cz/react-2/xxxmuck/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <main className="productPage">
      {
        productData ?
          <>
            <img src={productData.image} className="productPage__image"/>
              <div className="productPage__container">
                <h2 className="productPage__title">{productData.name}</h2>
                <Button />
            </div>
          </>
        :
        <>Loading...</>
      }

    </main>
  )
}