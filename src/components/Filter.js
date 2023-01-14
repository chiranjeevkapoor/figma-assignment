import "../components/Homenavbar.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import downarrow from "../assets/Stroke 1.png";
function valuetext(value) {
  return `${value}°C`;
}
function Filter() {
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div classNAme="filter-main-div" style={{ width: "25%" }}>
        <div className="filter-class">
          <p className="producttype-para">
            Products Type{" "}
            <img
              src={downarrow}
              alt=""
              style={{ position: "relative", left: "17rem" }}
            />
          </p>

          <ul>
            <li>
              <span className="product-num">Bags</span>
              <span
                className="product-num"
                style={{ position: "absolute", left: "25rem" }}
              >
                (112)
              </span>
            </li>
            <li>
              <span>Booking</span>
              <span style={{ position: "absolute", left: "25rem" }}>(32)</span>
            </li>
            <li>
              <span>Clothing</span>
              <span style={{ position: "absolute", left: "25rem" }}>(42)</span>
            </li>
            <li>
              <span>Men</span>
              <span style={{ position: "absolute", left: "25rem" }}>(13)</span>
            </li>
            <li>
              <span>Music</span>
              <span style={{ position: "absolute", left: "25rem" }}>(54)</span>
            </li>
            <li>
              <span>Posters</span>
              <span style={{ position: "absolute", left: "25rem" }}>(93)</span>
            </li>
            <li>
              <span>Shoes</span>
              <span style={{ position: "absolute", left: "25rem" }}>(52)</span>
            </li>
            {/* <li>
              <span>Uncategorized</span>
              <span style={{ position: "absolute", left: "8rem" }}>(14)</span>
            </li> */}
            <li>
              <span>Women</span>
              <span style={{ position: "absolute", left: "25rem" }}>(65)</span>
            </li>
          </ul>
        </div>
        <div className="size-div">
          <p>Size</p>
          <div className="button-main-div">
            <button className="size-button">XS</button>
            <button className="size-button">S</button>
            <button className="size-button">M</button>
            <button className="size-button">L</button>
            <button className="size-button">XL</button>
            <button className="size-button">XXL</button>
          </div>
        </div>
        <div>
          <p>Price range</p>
          <Box
            style={{ position: "relative", left: "3rem" }}
            sx={{ width: 250, color: "green" }}
          >
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Box>
          <p>Price: $800— $1,850</p>
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              width: "80px",
              height: "40px",
              fontSize: "20px",
              borderRadius: "5px",
            }}
          >
            Apply
          </button>
        </div>
        <div>
          <p>Colors</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <button
              style={{
                backgroundColor: "#A0BCE0",
                borderRadius: "5px",
                height: "18px",
                width: "18px",
                border: "none",
              }}
            ></button>
            <button
              style={{
                backgroundColor: "#EB676F",
                borderRadius: "5px",
                height: "18px",
                width: "18px",
                border: "none",
              }}
            ></button>
            <button
              style={{
                backgroundColor: "#FABE3C",
                borderRadius: "5px",
                height: "18px",
                width: "18px",
                border: "none",
              }}
            ></button>
            <button
              style={{
                backgroundColor: "#DB4444",
                borderRadius: "5px",
                height: "18px",
                width: "18px",
                border: "none",
              }}
            ></button>
            <button
              style={{
                backgroundColor: "#1E58C8",
                borderRadius: "5px",
                height: "18px",
                width: "18px",
                border: "none",
              }}
            ></button>
            <button
              style={{
                backgroundColor: "#3DAB25",
                borderRadius: "5px",
                height: "18px",
                width: "18px",
                border: "none",
              }}
            ></button>
            <button
              style={{
                backgroundColor: "#0C8C6C",
                borderRadius: "5px",
                height: "18px",
                width: "18px",
                border: "none",
              }}
            ></button>
            <button
              style={{
                backgroundColor: "#F4407D",
                borderRadius: "5px",
                height: "18px",
                width: "18px",
                border: "none",
              }}
            ></button>
            <button
              style={{
                backgroundColor: "#32B6EA",
                borderRadius: "5px",
                height: "18px",
                width: "18px",
                border: "none",
              }}
            ></button>
            <button
              style={{
                backgroundColor: "#121212",
                borderRadius: "5px",
                height: "18px",
                width: "18px",
                border: "none",
              }}
            ></button>
            <button
              style={{
                backgroundColor: "#9B51E0",
                borderRadius: "5px",
                height: "18px",
                width: "18px",
                border: "none",
              }}
            ></button>
            <button
              style={{
                backgroundColor: "#F2994A",
                borderRadius: "5px",
                height: "18px",
                width: "18px",
                border: "none",
              }}
            ></button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "2rem",
              textAlign: "left",
            }}
          >
            <p style={{ position: "relative", left: "2rem" }}>
              <b>Brands</b>
            </p>
            <ul>
              <li>
                <input type="checkbox" />
                Nike
              </li>
              <li>
                <input type="checkbox" />
                Louis Vuitton
              </li>
              <li>
                <input type="checkbox" />
                Hermes
              </li>
              <li>
                <input type="checkbox" />
                Gucci
              </li>
              <li>
                <input type="checkbox" />
                Zalando
              </li>
              <li>
                <input type="checkbox" />
                Adidas
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
