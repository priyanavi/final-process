import React from 'react';
import './style.css'

function styleSheet(props) {
    let className=props.primary  ? "primary" :''
  return (
    <div>
      <h1 className={className}>Hello</h1>
    </div>
  )
}

export default styleSheet
