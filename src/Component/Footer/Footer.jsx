import './Footer.css'

import logo from '../../assets/img/logo-colors-f7-bg-130.png'
import top from  '../../assets/img/top.svg'


const Footer = () => {
 
  return (
    <div className='footer'>
    
          <a  href="#top" class="iconup" ><img src={top} alt="" /></a> 
      <div className="AlbaaethFooter">
      <h4 >جامعة البعث</h4>
      <img src={logo} alt=""/>
      </div>
      
      <div className='ulfooter'>
      <ul>
        <li> <h5> الدراسات العليا </h5></li>
        <li>ماجستير</li>
        <li>دكتوراه</li>
        
      </ul> 
       <ul>
        <li> <h5>الأقسام في الكلية</h5></li>
        <li>برمجيات</li>
        <li>شبكات</li>
        <li> ذكاء صنعي</li>
      </ul>
      <ul>
        <li><h5>روابط الموقع الرئيسية</h5></li>
        <li>الرئيسية</li>
      </ul> 
      </div>
      
    </div>
  )
}

export default Footer