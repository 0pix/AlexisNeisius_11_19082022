import rockimg from '../../assets/rockImg.png'
import ImageContainer from '../../components/ImageContainer/ImageContainer'
import './Home.css'
import Thumbs from './Thumbs/Thumbs'

const Home = ({ data }) => {
  return (
    <div className='Home'>
      <ImageContainer
        opacity={0.3}
        image={rockimg}
        height={'100px'}
      >
        <h2>Chez vous, partout et ailleurs</h2>
      </ImageContainer>
      <div className='HomeGrid'>
        {data.map((elm) => (
          <Thumbs id={elm.id} key={elm.id} image={elm.cover} title={elm.title} />
        ))}
      </div>
    </div>
  )
}

export default Home
