import React from 'react'
import './StarRating.css'
import star from '../assets/star.svg'

const StarRating = ({ data }) => {
  const imgStar = (
    <svg
      className="StarSvgGrey"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.8225 6.5L8 0.5L6.1775 6.5H0.5L5.135 9.8075L3.3725 15.5L8 11.9825L12.635 15.5L10.8725 9.8075L15.5 6.5H9.8225Z" />
    </svg>
  )
  const star = [1, 2, 3, 4, 5]

  return star.map(() => {
    return <div className="StarRating StarSvgPink">{imgStar}</div>
  })
  // <div className="StarRating">{imgStar}</div>
}

export default StarRating
