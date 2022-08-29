import './Slider.css'
import React, { useState } from 'react'

const Slider = ({ images, height }) => {
  const [current, setCurrent] = useState(0)


  if (!Array.isArray(images) || images.length <= 0) {
    return null
  }
  const length = images.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  let ArrowNumber;
  if (length > 2){
    ArrowNumber = <>
      <button className='left-arrow' onClick={prevSlide}></button>
      <button className='right-arrow' onClick={nextSlide}></button>
      <span>{`${current + 1}/${length}`}</span></>
  } else {
    ArrowNumber = null
  }

  return (
    <section style={{ height: height }} className='slider'>
       {ArrowNumber}
      {images.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide} alt='slide-img' className='image' />
            )}
          </div>
        )
      })}
    </section>
  )
}
export default Slider
