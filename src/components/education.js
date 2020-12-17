import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Education extends Component {
  render() {
    return (
      <div>
        {" "}
        <div>
          <Grid>
            <Cell col={4}>
              <p>
                {this.props.startYear} - {this.props.endYear}
              </p>
            </Cell>
            <Cell col={8}>
              <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
              <p>{this.props.schoolDescription}</p>
            </Cell>
          </Grid>
        </div>
        <hr style={{ borderTop: "1px solid white", margin: "auto" }} />
        <div>
          <Grid>
            <Cell col={4}>
              <p>
                {this.props.start1Year} - {this.props.end1Year}
              </p>
            </Cell>
            <Cell col={8}>
              <h4 style={{ marginTop: "0px" }}>{this.props.school1Name}</h4>
              <p>{this.props.school1Description}</p>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Education;
