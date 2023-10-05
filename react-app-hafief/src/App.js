import "./App.css";
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <div className="header">
            <div className="header-left">
              <img src={require("./images/exhibitionlogo.png")}/>
            </div>
            <div className="header-right">
              <ul>
                <li>
                  <Link href="contact.html">Contact Us</Link>
                </li>
                <li>
                  <Link href="schedule.html">Schedule</Link>
                </li>
                <li>
                  <Link href="news.html">News</Link>
                </li>
                <li>
                  <Link href="profile.html" target="_blank">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="index.html">Home</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="banner">
            <img src={require("./images/photo1.jpeg")}/>
          </div>
          <div className="information">
            <div className="info-box">
              <h3>
                Our Products <span className="question-mark">?</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                animi necessitatibus est eius sunt, explicabo optio tenetur!
              </p>
            </div>
            <div className="info-box">
              <h3>
                We are Professional <span className="question-mark">?</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                animi necessitatibus est eius sunt, explicabo optio tenetur!
              </p>
            </div>
            <div className="info-box">
              <h3>
                Flexible Schedule <span className="question-mark">?</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                animi necessitatibus est eius sunt, explicabo optio tenetur!
              </p>
            </div>
          </div>
          <div className="words">
            <div className="words-box">
              <img src={require("./images/show1.jpg")}/>
              <h3>Practice Everyday</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                animi necessitatibus est eius sunt, explicabo optio tenetur!
              </p>
              <button className="words-btn">More Information..</button>
            </div>
            <div className="words-box">
              <img src={require("./images/show2.jpg")}/>
              <h3>Practice Everyday</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                animi necessitatibus est eius sunt, explicabo optio tenetur!
              </p>
              <button className="words-btn">More Information..</button>
            </div>
          </div>
          <div className="schedule">
            <div className="schedule-box">
              <h3>Schedule</h3>
              <ul>
                <li>
                  <Link href="">Monday</Link>
                </li>
                <li>
                  <Link href="">Tuesday</Link>
                </li>
                <li>
                  <Link href="">Wednesday</Link>
                </li>
                <li>
                  <Link href="">Thursday</Link>
                </li>
                <li>
                  <Link href="">Friday</Link>
                </li>
                <li>
                  <Link href="">Saturday</Link>
                </li>
                <li>
                  <Link href="">Sunday</Link>
                </li>
              </ul>
            </div>
            <div className="schedule-box">
              <h3>News</h3>
              <div className="schedule-news">
                <h5>Breaking News</h5>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                  animi necessitatibus est eius sunt, explicabo optio tenetur!
                </small>
              </div>
            </div>
            <div className="schedule-box">
              <h3>Links</h3>
              <ul>
                <li>
                  <img src={require("./images/facebook.png")}/>
                </li>
                <li>
                  <img src={require("./images/twitter.png")}/>
                </li>
                <li>
                  <img src={require("./images/linkedin.png")}/>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer">
            <p>Copyright by Ncent</p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
