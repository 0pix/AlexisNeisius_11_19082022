import rockimg from '../../assets/rockImg.png'
import ImageContainer from '../../components/ImageContainer'
import HomeGrid from '../home/HomeGrid'
import './Home.css'

const Home = ({ data }) => {
  return (
    <div className="Home">
      <ImageContainer opacity={0.3} image={rockimg} height={'100px'}>
        <h2>Chez vous, partout et ailleurs</h2>
      </ImageContainer>
      <HomeGrid data={data}></HomeGrid>
    </div>
  )
}

export default Home
