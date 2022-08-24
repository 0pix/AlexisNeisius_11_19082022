import { React, useState, useEffect } from 'react'
import './DropDownMenu.css'

const DropDownMenu = ({ children, title }) => {
  const [buttonState, setButtonState] = useState(false)

  const openMenu = () => {
    setButtonState(!buttonState)
  }

  return (
    <div className="DropDownMenu">
      <div className="dropDownMenu-header">
        <h3>{title}</h3>
        <button
          onClick={openMenu}
          className={`arrowDropMenu ${
            buttonState ? 'arrowDropMenuRotate' : ''
          }`}
        ></button>
      </div>
      {buttonState ? (
        <div className="dropDownMenu-content">{children}</div>
      ) : null}
    </div>
  )
}

export default DropDownMenu
