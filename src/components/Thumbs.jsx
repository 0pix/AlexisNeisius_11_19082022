import { Link } from 'react-router-dom'
import './Thumbs.css'

const Thumbs = ({ image, title }) => {
  return (
    <Link to="/apropos" className="Thumbs">
      <h3>{title}</h3>
      <div className="Thumbs-black"></div>
      <img src={image} alt={title} />
    </Link>
  )
}
export default Thumbs
