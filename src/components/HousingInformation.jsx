import React from 'react'
import Owner from './Owner'
import Tag from './Tag'
import StarRating from './StarRating'
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
        {/* <h1>{data.rating}</h1> */}
        <StarRating data={data}></StarRating>
        <Owner data={data}></Owner>
      </div>
    </div>
  )
}

export default HousingInformation
