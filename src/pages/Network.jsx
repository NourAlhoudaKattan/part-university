import React from "react";
import NavBar from "../Component/NavBar/NavBar";
import Hero from "../Component/Hero/Hero";
import bcIT from "../assets/img/n5.jpg";
import Projectes from "../Component/Projectes/Projectes";
import year5 from "../assets/img/grop5.jpg";
import year4 from "../assets/img/grop4.jpg";
import Footer from "../Component/Footer/Footer";
import Doctors from "../Component/Doctors/Doctors";
import Details from "../Component/Details/Details";
const Network = () => {
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
      <Hero bc={bcIT} />
      <Details
        title="نبذة عن هندسة الشبكات والنظم الحاسوبية"
        text="هندسة الشبكات هي فرع من فروع الهندسة الذي يركز
           على تصميم وبناء وإدارة الشبكات المختلفة، سواء
           كانت شبكات الحاسوب، شبكات الاتصالات، 
          شبكات الإنترنت أو غيرها. تشمل هندسة
           الشبكات دراسة كيفية توصيل وتبادل 
          البيانات
           بين أجهزة الكمبيوتر
         والأجهزة الأخرى عبر شبكات
           مختلفة، بالإضافة إلى
           تحليل وتحسين أداء 
          الشبكات وتأمينها من التهديدات الأمنية. تعتبر هندسة الشبكات مجالًا 
          حيويًا ومهمًا في عصر التكنولوجيا الحديثة حيث تلعب دورًا كبيرًا
           في توفير اتصال سريع وآمن وموثوق بين الأجهزة المختلفة."
      />
    <Doctors  menuDoctor={[" د. أكرم مرعي ", "  د.ماهر عباس ", "د.علي الحاتم" ,"د.أحمد العلي ", ">د.نصر عبدالحميد  ","د.طريف الكزلي  ","د.ديمة شاهين  ","د. منال العمر"]}/>
      <h1>مشاريع هندسة البرمجيات ونظم المعلومات </h1>
      <Projectes title="مشاريع خامسة" About1={year5} />
      <Projectes title="مشاريع رابعة" About1={year4} />
      <Footer />
    </div>
  );
};

export default Network;
