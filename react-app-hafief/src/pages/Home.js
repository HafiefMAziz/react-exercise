import React from "react";

function Home() {
  return (
    <div>
      {" "}
      <div className="banner">
        <img src={require("../images/photo1.jpeg")} alt=" " />
      </div>
      <div className="information">
        <div className="info-box">
          <h3>
            Our Products <span className="question-mark">?</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi
            necessitatibus est eius sunt, explicabo optio tenetur!
          </p>
        </div>
        <div className="info-box">
          <h3>
            We are Professional <span className="question-mark">?</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi
            necessitatibus est eius sunt, explicabo optio tenetur!
          </p>
        </div>
        <div className="info-box">
          <h3>
            Flexible Schedule <span className="question-mark">?</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi
            necessitatibus est eius sunt, explicabo optio tenetur!
          </p>
        </div>
      </div>
      <div className="words">
        <div className="words-box">
          <img src={require("../images/show1.jpg")} alt=" " />
          <h3>Practice Everyday</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi
            necessitatibus est eius sunt, explicabo optio tenetur!
          </p>
          <button className="button-53">More Information..</button>
        </div>
        <div className="words-box">
          <img src={require("../images/show2.jpg")} alt=" " />
          <h3>Practice Everyday</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi
            necessitatibus est eius sunt, explicabo optio tenetur!
          </p>
          <button className="button-53">More Information..</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
