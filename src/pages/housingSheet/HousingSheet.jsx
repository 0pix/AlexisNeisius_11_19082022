import { useParams } from 'react-router-dom'
import Slider from '../../components/Slider/Slider'
import './HousingSheet.css'
import Tag from '../../components/Tag/Tag'
import StarRating from '../../components/StartRating/StarRating'
import Owner from '../../components/Owner/Owner'
import DropDownMenu from '../../components/DropDownMenu/DropDownMenu'
import React from 'react'

const HousingSheet = ({ data }) => {
  const { idUrl } = useParams()
  const goodData = data.find((item) => item.id === idUrl)

  if (goodData === undefined || goodData === null) {
    return
  }

  return (
    <div className='HousingSheet'>
      <Slider
        images={goodData ? goodData.pictures : ''}
        height='250px'
      ></Slider>
      <div className='HousingInformation'>
        <div className='titleLocat'>
          <h1>{goodData.title}</h1>
          <div className='city'>{goodData.location}</div>
          <div className='tagBloc'>
            <Tag tag={goodData.tags}></Tag>
          </div>
        </div>
        <div className='nameRating'>
          <StarRating data={goodData}></StarRating>
          <Owner data={goodData}></Owner>
        </div>
        <div className='housingMenus'>
          <DropDownMenu title={'Description'}>{goodData.description}</DropDownMenu>
          <DropDownMenu title={'Équipements'}>
            <ul>
              {goodData.equipments.map((elm, index) => {
                return <li key={elm + '_' + index}>{elm}</li>
              })}
            </ul>
          </DropDownMenu>
        </div>
      </div>
    </div>
  )
}
export default HousingSheet
