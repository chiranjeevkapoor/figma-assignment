import "../components/Homenavbar.css";
import facebook from "../assets/Vector (12).png";
import instagram from "../assets/Vector (13).png";
import youtube from "../assets/Vector (14).png";
import twitter from "../assets/Vector (15).png";
import pinterest from "../assets/Vector (16).png";
import call from "../assets/Vector (17).png";
import email from "../assets/Vector (18).png";
import location from "../assets/Vector (19).png";
function Footer() {
  return (
    <>
      <div className="all-footer-div">
        <div className="footer-div">
          <div className="left-footer">
            <div>
              <p style={{ textAlign: "left" }}>
                Sign Up Today and get <br />
                Rs. 200 off On your first order.
              </p>
            </div>
            <div>
              <input
                style={{
                  borderRadius: "6px",
                  border: "none",
                  height: "46px",
                  width: "336px",
                }}
                type="text"
                placeholder="Enter your e-mail"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "30%",
              }}
            >
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={youtube} alt="" />
              <img src={twitter} alt="" />
              <img src={pinterest} alt="" />
            </div>
          </div>
          <div className="right-footer">
            <div className="collection-div">
              <p className="footer-heading">Collection</p>
              <ul style={{ paddingLeft: "0px" }}>
                <li style={{ paddingBottom: "10px" }}>Clothing</li>
                <li style={{ paddingBottom: "10px" }}>Tops</li>
                <li style={{ paddingBottom: "10px" }}>Sweaters</li>
                <li style={{ paddingBottom: "10px" }}>Dresses</li>
                <li style={{ paddingBottom: "10px" }}>Shoes</li>
              </ul>
            </div>
            <div className="collection-div">
              <p className="footer-heading">Company</p>
              <ul style={{ paddingLeft: "0px" }}>
                <li style={{ paddingBottom: "10px" }}>Career at Toppers</li>
                <li style={{ paddingBottom: "10px" }}>About Toppers</li>
                <li style={{ paddingBottom: "10px" }}>Contact Us</li>
                <li style={{ paddingBottom: "10px" }}>Gift Cards</li>
                <li style={{ paddingBottom: "10px" }}>Blog</li>
              </ul>
            </div>
            <div className="collection-div">
              <p className="footer-heading">Need Help</p>
              <ul style={{ paddingLeft: "0px" }}>
                <li style={{ paddingBottom: "10px" }}>Order Status</li>
                <li style={{ paddingBottom: "10px" }}>Shipping & Delivery</li>
                <li style={{ paddingBottom: "10px" }}>FAQ & Helps</li>
                <li style={{ paddingBottom: "10px" }}>Terms & Conditions</li>
                <li style={{ paddingBottom: "10px" }}>Legal & Privacy</li>
              </ul>
            </div>
            <div className="collection-div">
              <p className="footer-heading">Exclusive Services</p>
              <ul style={{ paddingLeft: "0px" }}>
                <li style={{ paddingBottom: "10px" }}>
                  <img src={call} alt="" />
                  Call Us: +1 666 8888
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  <img src={email} alt="" />
                  Send us an email
                </li>
                <li style={{ paddingBottom: "10px" }}>
                  <img src={location} alt="" />
                  See our store
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <hr style={{ color: "#E5E5E5", display: "flex" }} /> */}

        <p style={{ color: "#A0A0A0", marginBottom: "0px" }}>
          © 2022 Toppers United. All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
