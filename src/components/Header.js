import Homenavbar from "./Homenavbar";
import rightarrow from "../assets/icons8-right-arrow-50.png";
import "./Homenavbar.css";

function Header() {
  return (
    <>
      <Homenavbar />
      <div className="free-del">
        <p>
          Free Delivery on orders above Rs. 1000, DON’T MISS <b> SHOP NOW </b>
          <img src={rightarrow} alt="ra" />
        </p>
      </div>
      <div className="head-div">
        <h1 className="corporate-header">Corporate</h1>

        <p>
          Homepage /<b> Shop</b>
        </p>
      </div>
    </>
  );
}

export default Header;
