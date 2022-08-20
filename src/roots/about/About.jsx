import { useParams } from 'react-router-dom'
import ImageContainer from '../../components/ImageContainer'

const About = ({ data }) => {
  const { idUrl } = useParams()
  const goodData = data.reduce(
    (acc, item) => (item.id === idUrl ? (acc = item) : acc),
    0
  )

  return (
    <div className="About">
      <ImageContainer image={goodData.cover} height="200px" opacity={0} />
    </div>
  )
}

export default About
