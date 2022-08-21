import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Slider from '../../components/Slider'
import HousingInformation from '../../components/HousingInformation'
import './HousingSheet.css'
const HousingSheet = () => {
  const [data, setData] = useState([])
  const { idUrl } = useParams()
  useEffect(() => {
    fetch('../data/data.json')
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

  const goodData = data.reduce(
    (acc, item) => (item.id === idUrl ? (acc = item) : acc),
    0
  )

  return (
    <div className="About">
      <Slider images={goodData.pictures} height="250px"></Slider>
      <HousingInformation></HousingInformation>
      {/* <button onClick={() => setNumber(number + 1)}>Clic</button> */}
    </div>
  )
}
export default HousingSheet
