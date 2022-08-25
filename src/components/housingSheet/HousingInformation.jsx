import React from 'react'
import Owner from './Owner'
import Tag from './Tag'
import StarRating from './StarRating'
import DropDownMenu from '../DropDownMenu'
import './HousingInformation.css'

const HousingInformation = ({ data }) => {
  if (data === undefined) {
    return
  }
  return (
    <div className="HousingInformation">
      <div className="titleLocat">
        <h1>{data.title}</h1>
        <div className="city">{data.location}</div>
        <div className="tagBloc">
          <Tag tag={data.tags}></Tag>
        </div>
      </div>
      <div className="nameRating">
        <StarRating data={data}></StarRating>
        <Owner data={data}></Owner>
      </div>
      <div className="housingMenus">
        <DropDownMenu title={'Description'}>{data.description}</DropDownMenu>
        <DropDownMenu title={'Équipements'}>
          <ul>
            {data.equipments.map((elm, index) => {
              return <li key={elm + '_' + index}>{elm}</li>
            })}
          </ul>
        </DropDownMenu>
      </div>
    </div>
  )
}

export default HousingInformation
