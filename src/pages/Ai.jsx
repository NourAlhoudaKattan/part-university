import React from 'react'
import Hero from '../Component/Hero/Hero'
import NavBar from '../Component/NavBar/NavBar'
import Footer from '../Component/Footer/Footer'
import bcIT from '../assets/img/ai6.jpg'
const Ai = () => {
  return (
    <div>
         <NavBar
        menu={[
          "الأخبار والإعلانات",
          "دليل وخدمات الطالب",
          "مكتبة الكلية",
          " عن الكلية",
          "الرئيسية",
        ]}
        bcblack={false}
      />
       
         <NavBar menu={["الأخبار والإعلانات","دليل وخدمات الطالب","مكتبة الكلية", " عن الكلية","الرئيسية"]} bcblack={false}  />
        <Hero bc={bcIT} />
        <h1 style={{textAlign:'center',marginTop:'100px'}}>  لم يتم افتتاح القسم بعد </h1>
        <Footer/>
      
    </div>
  )
}

export default Ai
