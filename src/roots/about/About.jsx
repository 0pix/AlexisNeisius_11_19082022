import { useParams } from 'react-router-dom'

const About = () => {
  const { questionNumber } = useParams()
  console.log(questionNumber)
  return <div>about</div>
}

export default About
