import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import './Header.css'

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/apropos">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
