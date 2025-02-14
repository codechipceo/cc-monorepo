import React, { useState } from 'react'
import { ToggleProps } from './ToggleButton.types'
export const ToggleButton:React.FC<ToggleProps> = ({disabled=false,onClick,id,addclassName,Active=false}) => {

    return (
<button id={id} onClick={onClick} className={`toggle ${addclassName} 
        ${!Active && !disabled ? "active" : ""}  
        ${disabled ? "disabled" : ""}`}disabled={disabled} ></button>  )
}

export default ToggleButton;
 