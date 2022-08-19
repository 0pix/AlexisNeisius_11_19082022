import rockimg from '../../assets/rockImg.png'
import ImageContainer from '../../components/ImageContainer'

const Home = () => {
  return (
    <div className="home">
      <ImageContainer opacity={0.3} image={rockimg} height={'100px'}>
        <h2>Chez vous, partout et ailleurs</h2>
      </ImageContainer>
    </div>
  )
}

export default Home
