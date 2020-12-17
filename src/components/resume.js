import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://i.ibb.co/zZ9qBmj/circle-cropped.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Batuhan Balta</h2>
            <h4 style={{ color: "lightgrey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>my adress </p>
            <h5>Email</h5>
            <p>bthn.balta@gmail.com </p>
            <h5>Web</h5>
            <p>baltabatuhan.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>{" "}
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2012}
              endYear={2016}
              schoolName={"Suleyman Demirel University"}
              schoolDescription={"Electronics and Communication Engineering"}
              start1Year={2019}
              end1Year={2020}
              school1Name={"Lambda School"}
              school1Description={"Full Stack Web Developer"}
            />
            <hr style={{ borderTop: "1px solid white", margin: "auto" }} />
            <h2>Skills</h2>
            <Skills skill="HTML/CSS" progress={100} />
            <Skills skill="JavaScript" progress={100} />
            <Skills skill="React" progress={85} />
            <Skills skill="Phyton" progress={50} />
            <Skills skill="NodeJS" progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
