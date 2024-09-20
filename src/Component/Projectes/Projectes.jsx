import { Link } from "react-router-dom";
import "./Projectes.css";

const Projectes = ({ title, About1}) => {
  return (
    <div>
       
      <div className="Project">
        <div className="yearul">
          <h2>{title}</h2>
          <ul>
           <Link> <li>2023 مشاريع عام</li> </Link>
           <Link> <li>2022 مشاريع عام</li></Link>
           <Link><li>2021 مشاريع عام</li></Link>
           <Link><li>2020 مشاريع عام</li></Link>
           <Link> <li>2019 مشاريع عام</li></Link>
          </ul>
        </div>
        <div className="Projectimg">
          <img src={About1} alt="" />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Projectes;
