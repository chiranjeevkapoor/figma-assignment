import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import pantsImage from "../assets/Background (12).png";
import pantsImageone from "../assets/Background (1).png";
import pantsImagetwo from "../assets/Background (2).png";
import pantsImagethree from "../assets/Background (3).png";
import pantsImage4 from "../assets/Background (4).png";
import pantsImage5 from "../assets/Background (5).png";
import pantsImage6 from "../assets/Background (6).png";
import pantsImage7 from "../assets/Background (7).png";
import pantsImage8 from "../assets/Background (8).png";
import pantsImage9 from "../assets/Background (9).png";

import pantsImage13 from "../assets/Background (13).png";
import "./Homenavbar.css";
import emptystar from "../assets/favorite_major.png";
import filledstar from "../assets/Primary fill.png";
import Filter from "./Filter";

function Main() {
  return (
    <>
      <div className="main-div">
        <Filter />
        <div className="card-items">
          <Card className="card-styles" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={pantsImage}
              height="285px"
              width="219px"
            />
            <Card.Body>
              <Card.Title>Combo Tennis Shorts & Tee</Card.Title>
              <Card.Text className="card-text">₹680</Card.Text>
              <Card.Text>
                <div>
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={emptystar} alt="emptystar" />
                  <span className="review-span">(1,234 reviews)</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-styles" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={pantsImageone}
              height="285px"
              width="219px"
            />
            <Card.Body>
              <Card.Title>Universal Sports cap</Card.Title>
              <Card.Text className="card-text">₹680</Card.Text>
              <Card.Text>
                <div>
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={emptystar} alt="emptystar" />
                  <span className="review-span">(1,234 reviews)</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-styles" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={pantsImagetwo}
              height="285px"
              width="219px"
            />
            <Card.Body>
              <Card.Title>Training max shoes</Card.Title>
              <Card.Text className="card-text">₹680</Card.Text>
              <Card.Text>
                <div>
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={emptystar} alt="emptystar" />
                  <span className="review-span">(1,234 reviews)</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-styles" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={pantsImagethree}
              height="285px"
              width="219px"
            />
            <Card.Body>
              <Card.Title>Women long blazer</Card.Title>
              <Card.Text className="card-text">₹680</Card.Text>
              <Card.Text>
                <div>
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={emptystar} alt="emptystar" />
                  <span className="review-span">(1,234 reviews)</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-styles" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={pantsImage4}
              height="285px"
              width="219px"
            />
            <Card.Body>
              <Card.Title>Textured check scarf</Card.Title>
              <Card.Text className="card-text">₹680</Card.Text>
              <Card.Text>
                <div>
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={emptystar} alt="emptystar" />
                  <span className="review-span">(1,234 reviews)</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-styles" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={pantsImage5}
              height="285px"
              width="219px"
            />
            <Card.Body>
              <Card.Title>Men white Tee</Card.Title>
              <Card.Text className="card-text">₹680</Card.Text>
              <Card.Text>
                <div>
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={emptystar} alt="emptystar" />
                  <span className="review-span">(1,234 reviews)</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-styles" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={pantsImage6}
              height="285px"
              width="219px"
            />
            <Card.Body>
              <Card.Title>Cycling helmet & gear</Card.Title>
              <Card.Text className="card-text">₹680</Card.Text>
              <Card.Text>
                <div>
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={emptystar} alt="emptystar" />
                  <span className="review-span">(1,234 reviews)</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-styles" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={pantsImage7}
              height="285px"
              width="219px"
            />
            <Card.Body>
              <Card.Title>Casual blazer</Card.Title>
              <Card.Text className="card-text">₹680</Card.Text>
              <Card.Text>
                <div>
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={emptystar} alt="emptystar" />
                  <span className="review-span">(1,234 reviews)</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-styles" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={pantsImage8}
              height="285px"
              width="219px"
            />
            <Card.Body>
              <Card.Title>women long blazer</Card.Title>
              <Card.Text className="card-text">₹680</Card.Text>
              <Card.Text>
                <div>
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={emptystar} alt="emptystar" />
                  <span className="review-span">(1,234 reviews)</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-styles" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={pantsImage9}
              height="285px"
              width="219px"
            />
            <Card.Body>
              <Card.Title>Combo Tennis Shorts & Tee</Card.Title>
              <Card.Text className="card-text">₹680</Card.Text>
              <Card.Text>
                <div>
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={emptystar} alt="emptystar" />
                  <span className="review-span">(1,234 reviews)</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card-styles" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={pantsImage13}
              height="285px"
              width="219px"
            />
            <Card.Body>
              <Card.Title>unisex running shoes</Card.Title>
              <Card.Text className="card-text">₹680</Card.Text>
              <Card.Text>
                <div>
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={filledstar} alt="emptystar" />
                  <img src={emptystar} alt="emptystar" />
                  <span className="review-span">(1,234 reviews)</span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Main;
