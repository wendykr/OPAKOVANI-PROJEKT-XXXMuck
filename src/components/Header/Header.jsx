import './Header.scss';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__link"><h1 className="header__title">XXXMuck</h1></NavLink>
      </div>
    </header>
  )
}