import './ProductItem.scss';
import { NavLink } from 'react-router-dom';

export const ProductItem = ({ id, name, image }) => {
  return (
    <NavLink to={`/product/${id}`} className="productItem">
      <img src={image} className="productItem__image"/>
      <h2 className="productItem__title">{name}</h2>
    </NavLink>
  )
}