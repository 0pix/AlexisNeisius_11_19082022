import Thumbs from './Thumbs'
import './HomeGrid.css'
const HomeGrid = ({ data }) => {
  // const tabler = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return data.map((elm) => (
    <div className="Thumbs">
      <Thumbs key={elm.id} image={elm.cover} title={elm.title} />
    </div>
  ))
}
export default HomeGrid
