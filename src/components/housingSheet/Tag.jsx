import React from 'react'
import './Tag.css'

const Tag = ({ tag }) => {
  return tag.map((elm, index) => <div key={elm + '/' + index} className="Tag">{elm}</div>)
}

export default Tag
