import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/apropos/42">Questionnaire</Link>
    </nav>
  )
}

export default Header
