import React from "react";
import NavBar from "../Component/NavBar/NavBar";
import Hero from "../Component/Hero/Hero";
import SectionIT from "../Component/SectionIT/SectionIT";
import HeightStudy from "../Component/HeightStudy/HeightStudy";
import Footer from "../Component/Footer/Footer";
import bcIT from "../assets/img/test4.jpg";
const Home = () => {
  return (
    <div>
      <NavBar
        menu={[
          "الأخبار والإعلانات",
          "دليل وخدمات الطالب",
          " عن الكلية",
          "الرئيسية",
        ]}
        bcblack={false}
      />
      <Hero
        bc={bcIT}
        title="أرشفة مشاريع كلية الهندسة المعلوماتية "
        text=" يعتبر هذا الموقع منصة إلكترونية تهدف إلى توثيق وتبادل المشاريع الجامعية وتعزيز التعلم والابتكار في مجال الهندسة المعلوماتية "
      />
      <SectionIT />
      <HeightStudy />
      <Footer />
    </div>
  );
};

export default Home;
