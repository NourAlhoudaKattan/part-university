import React from 'react'
import './Details.css'
const Details = ({title,text}) => {
  return (
    <div className='details'>
             <h1>{title}</h1>
           <p>{text}</p>
      
    </div>
  )
}

export default Details
