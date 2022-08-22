import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Slider from '../../components/Slider'
import HousingInformation from '../../components/HousingInformation'
import './HousingSheet.css'
const HousingSheet = ({ data }) => {
  // const [data, setData] = useState([])
  const { idUrl } = useParams()

  // useEffect(() => {
  //   // fetch('../data.json')
  //   //   .then(function (res) {
  //   //     console.log(res)
  //   //     return res.json()
  //   //   })
  //   //   .then(function (data) {
  //   //     console.log(data)
  //   //     // store Data in State Data Variable
  //   //     return setData(data)
  //   //   })
  //   //   .catch(function (err) {
  //   //     console.log(err, ' error')
  //   //   })
  //   fetch('../data.json')
  //     .then((response) => response.json())
  //     .then((actualData) => setData(actualData))
  //     .catch(function (err) {
  //       console.log(err, ' error')
  //     })
  // }, [])

  // const goodData = data.reduce(
  //   (acc, item) => (item.id === idUrl ? (acc = item) : acc),
  //   null
  // )

  const goodData = data.find((item) => item.id === idUrl)

  // if (goodData === undefined && goodData === null) {
  //   return
  // }

  return (
    <div className="About">
      <Slider
        images={goodData ? goodData.pictures : ''}
        height="250px"
      ></Slider>
      <HousingInformation data={goodData}></HousingInformation>
    </div>
  )
}
export default HousingSheet
