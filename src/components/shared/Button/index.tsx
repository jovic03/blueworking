import React from 'react'
import './style.css';

const Button = (props: any) => {
  return (
    <button className={props.estilo}>{props.texto}</button>
  )
}

export default Button