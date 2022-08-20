import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Slider from '../../components/Slider'
import './HousingSheet.css'
const HousingSheet = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('./data/data.json')
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        // store Data in State Data Variable
        setData(data)
      })
      .catch(function (err) {
        console.log(err, ' error')
      })
  }, [])

  const { idUrl } = useParams()
  const goodData = data.reduce(
    (acc, item) => (item.id === idUrl ? (acc = item) : acc),
    0
  )
  // console.log(pictures)
  // const [number, setNumber] = useState(0)
  // console.log(number)
  // console.log(goodData.pictures[0])
  return (
    <div className="About">
      housingsheet
      <Slider images={goodData.pictures} height="250px"></Slider>
      {/* <button onClick={() => setNumber(number + 1)}>Clic</button> */}
    </div>
  )
}
export default HousingSheet
