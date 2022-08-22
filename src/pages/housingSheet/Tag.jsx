import React from 'react'
import './Tag.css'

const Tag = ({ tag }) => {
  // console.log(tag)
  return tag.map((elm) => <div className="Tag">{elm}</div>)
}

export default Tag
