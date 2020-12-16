import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.ibb.co/zZ9qBmj/circle-cropped.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />
              <p>HTML/CSS| JavaScript | React | NodeJS | Phyton</p>

              <div className="social-links">
                <a
                  href="https://twitter.com/haydarinnarina"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-twitter-square"></i>
                </a>
                <a
                  href="https://github.com/baltabatuhan"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-github-square"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/baltabatuhan/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/baltabatuhan/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-instagram-square"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;
