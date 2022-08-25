import Thumbs from './Thumbs'
import './HomeGrid.css'
const HomeGrid = ({ data }) => {
  return (
    <div className="HomeGrid">
      {data.map((elm) => (
        <Thumbs id={elm.id} key={elm.id} image={elm.cover} title={elm.title} />
      ))}
    </div>
  )
}
export default HomeGrid
