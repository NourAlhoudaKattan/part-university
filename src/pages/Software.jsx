import React from 'react'
 import NavBar from '../Component/NavBar/NavBar'
 import Hero from '../Component/Hero/Hero'
 import bcIT from '../assets/img/soft5.jpg'
import Projectes from '../Component/Projectes/Projectes'
import year5 from '../assets/img/grop5.jpg'
import year4 from '../assets/img/grop4.jpg'
import Footer from '../Component/Footer/Footer'
import Doctors from '../Component/Doctors/Doctors'
import Details from '../Component/Details/Details'
const Software = () => {
  return (
    <div>
           <NavBar menu={["الأخبار والإعلانات", "دليل وخدمات الطالب", "مكتبة الكلية", " عن الكلية", "الرئيسية"]} bcblack={false} />
           <Hero bc={bcIT}/>
           <Details  title=" نبذة عن هندسة البرمجيات ونظم المعلومات " text="هندسة البرمجيات هي مجال دراسي يهتم بتطوير وبناء البرامج الحاسوبية بطريقة منهجية ومنظمة. يهدف مهندسو البرمجيات إلى تحقيق أهداف معينة مثل جودة البرنامج، كفاءة الأداء، سهولة الصيانة، وتلبية احتياجات المستخدمين.

          تشمل هندسة البرمجيات عدة مراحل من تحليل وتصميم وتطوير واختبار البرمجيات. يتعين على مهندسي البرمجيات أن يكونوا على دراية بمبادئ البرمجة وهندسة البرمجيات، وأساليب تطوير البرمجيات، بالإضافة إلى فهم عميق لمتطلبات المستخدم والبيئة التي ستعمل فيها البرامج.

          تعتبر هندسة البرمجيات مهمة جداً في عالم التكنولوجيا حيث تضمن جودة وكفاءة البرامج المستخدمة في مختلف المجالات مثل الصناعة، الطب، التجارة الإلكترونية، وغيرها. تعتبر هذه المهنة مثيرة ومليئة بالتحديات والفرص للإبداع والابتكار.
        "/>
           <Doctors  menuDoctor={[" د.محسن الحسين", " د.كمال السلوم", "د.رانيا لطفي" ," د.سهيل الحمود   ", "د.ايفا حريقص   ","د.أسماء شعار ","د.عبدو دربولي  "," د.أسامة ناصر ","د.فدا جهجاه  "]}/>
           <h1>مشاريع هندسة البرمجيات ونظم المعلومات </h1>
           <Projectes title="مشاريع خامسة" About1={year5}/>
           <Projectes title="مشاريع رابعة" About1={year4} />
           <Footer/>
    </div>
  )
}

export default Software
