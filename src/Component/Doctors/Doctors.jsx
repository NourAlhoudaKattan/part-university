import React from 'react'
import './Doctor.css'
const Doctors = ({menuDoctor}) => {
  return (
    <div>
         <div>
        <h1> أسماء دكاترة هندسة البرمجيات ونظم المعلومات  </h1>
        <div className='NmaeDr'>
          
          <ul>
          {menuDoctor.map((e)=>{
            return  <li><p>{e}</p></li>
          })}
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Doctors
