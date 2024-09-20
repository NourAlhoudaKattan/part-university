import { Link } from 'react-router-dom'
import trend1 from '../../assets/img/1.jpg'
import trend2 from '../../assets/img/2.jpg'
import trend3 from '../../assets/img/3.jpg'
import './SectionIT.css'


const SectionIT = () => {
  const trenCard = [
    { path: '/Software', img: trend1, text: " قسم البرمجيات" },
    { path: '/NetWork', img: trend2, text: "قسم الشبكات " },
    { path: '/Ai', img: trend3, text: "قسم الذكاءالصنعي" },
  ]

  return (
    <div className='card'>
      <h1>الأقسام في كلية الهندسة المعلوماتية</h1>
      <div className='parenttren'>

        {trenCard.map((e, i) => {
          return (

            <div key={i} className='bigit' >
              <Link to={e.path}>
                <div className='it'>
                  <h1>{e.text}</h1>
                  <img src={e.img} alt="" id="img1" />
                </div>
              </Link>

            </div>)
        })
        }

      </div>

    </div>
  )

}

export default SectionIT