import './HomePage.scss';
import { ProductList } from '../../components/ProductList/ProductList';

export const HomePage = ({ products, isLoading, error }) => {

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