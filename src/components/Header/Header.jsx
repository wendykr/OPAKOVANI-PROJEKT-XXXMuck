import './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <NavLink to="/" className="header__link"><h1 className="header__title">XXXMuck</h1></NavLink>
      </div>
    </div>
  )
}