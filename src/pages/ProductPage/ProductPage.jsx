import './ProductPage.scss';
import { Button } from '../../components/Button/Button';
import { useParams } from 'react-router-dom';

export const ProductPage = ({ products, isLoading, error }) => {
  const { productId } = useParams();
  const productData = products.find((product) => product.id == productId);

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