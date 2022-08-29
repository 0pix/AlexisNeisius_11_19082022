import React from 'react'
import './Owner.css'

const Owner = ({ data }) => {
  if (data.host === undefined) {
    return
  }

  const splitName = data.host.name.split(' ')
  return (
    <div className="Owner">
      <div className="name">
        <div>{splitName[0]}</div>
        <div>{splitName[1]}</div>
      </div>
      <div className="pictureOwner">
        <img src={data.host.picture} alt="" />
      </div>
    </div>
  )
}

export default Owner
