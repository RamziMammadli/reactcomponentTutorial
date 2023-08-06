import React from 'react'

const CardButton = ({text, klikle}) => {
  return (
    <button style={{width:80, height:35}} onClick={klikle}>
        {text}
    </button>
  )
}

export default CardButton