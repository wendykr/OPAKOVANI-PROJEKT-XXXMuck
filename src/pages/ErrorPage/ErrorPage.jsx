import './ErrorPage.scss';
import { NavLink } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <main className="errorPage">
      <h2 className="errorPage__title">Tady nic není :)</h2>
      <p className="errorPage__text"><NavLink to="/" className="errorPage__link">Zpět</NavLink> na hlavní stranu.</p>
    </main>
  )
}