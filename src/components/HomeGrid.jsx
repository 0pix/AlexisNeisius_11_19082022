import Thumbs from './Thumbs'
import './HomeGrid.css'
const HomeGrid = ({ data }) => {
  return data.map((elm) => (
    <div className="Thumbs">
      <Thumbs key={elm.id} image={elm.cover} title={elm.title} />
    </div>
  ))
}
export default HomeGrid
