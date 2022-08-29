import { React, useState } from 'react'
import './DropDownMenu.css'

const DropDownMenu = ({ children, title }) => {
  const [buttonState, setButtonState] = useState(false)

  const openMenu = () => {
    setButtonState(!buttonState)
  }

  return (
    <button onClick={openMenu} className='DropDownMenu'>
      <div className='dropDownMenu-header'>
        <h3>{title}</h3>
        <div
          className={`arrowDropMenu ${
            buttonState ? 'arrowDropMenuRotate' : ''
          }`}
        ></div>
      </div>
      {buttonState ? (
        <div className='dropDownMenu-content'>{children}</div>
      ) : null}
    </button>
  )
}

export default DropDownMenu



