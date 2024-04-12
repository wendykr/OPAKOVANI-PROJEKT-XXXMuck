import './ProductList.scss'
import { ProductItem } from '../ProductItem/ProductItem';

export const ProductList = ({ products }) => {
  return (
    <div className="productList">
      {
        products.map((product, index) => <ProductItem name={product.name} image={product.image} id={product.id} key={index} />)
      }
    </div>
  )
}
