
import './Hero.css'

// eslint-disable-next-line react/prop-types

const Hero = ({bc,title,text}) => {
  
  return (
    <div className="hero" style={{backgroundImage:`url(${bc})`}}>
      <div className='text-hero'>
      <h2>{title}</h2>
       <p>{text}</p>
       <div className='parent-search '>
       <input
            className='search' 
                type="text"
                placeholder=":ابحث عن مشروع معين"
            />
            <button >بحث</button>
       </div>
     
           
      </div>

    </div>
  )
}

export default Hero