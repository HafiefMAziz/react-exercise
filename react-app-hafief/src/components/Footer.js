import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
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
              <img src={"https://i.pinimg.com/originals/ce/d6/6e/ced66ecfc53814d71f8774789b55cc76.png"} alt=" "/>
              <img src={"https://freelogopng.com/images/all_img/1657045399twitter-icon-png.png"} alt=" "/>
              <img src={"https://cdn-icons-png.flaticon.com/512/174/174857.png"} alt=" "/>
        </div>
      </div>
      <div className="footer">
        <p>Copyright by Ncent</p>
      </div>
    </div>
  );
}

export default Footer;
