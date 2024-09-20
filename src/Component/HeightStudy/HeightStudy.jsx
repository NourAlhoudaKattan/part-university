import './HeightStudy.css'
import master from '../../assets/img/master.jpg'
import dr from '../../assets/img/dr.jpg'
const HeightStudy = () => {
  const it = [
    { img: master, text: " رسائل الماجستير " },
    { img: dr, text: " رسائل الدكتوراه " }
  ]

  return (
    <div className="CardButtom" >
      <h1 >االدراسات العليا في كلية الهندسة المعلوماتية</h1>
      <div className='CardButtomImg' >
        {it.map((e, i) => {
          return (
              <div className='pButtomImg' key={i}>
                <h1>{e.text}</h1>
               <img src={e.img} alt="" />
              </div>

           )
        })
        }

      </div>


    </div>
  )
}

export default HeightStudy