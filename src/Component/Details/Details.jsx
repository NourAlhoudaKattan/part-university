import React from 'react'
import './details.css'
const Details = ({title,text}) => {
  return (
    <div className='details'>
             <h1>{title}</h1>
           <p>{text}</p>
      
    </div>
  )
}

export default Details
