import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'
import './Header.css'

const Header = () => {
  const location = useLocation().pathname
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link className={location === '/' ? 'inlinText' : ''} to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className={location === '/apropos' ? 'inlinText' : ''}
              to="/apropos"
            >
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
