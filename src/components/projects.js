import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://promotiontag.com/wp-content/uploads/2019/07/orange.jpg) center / cover",
              }}
            >
              Tidy Hive
            </CardTitle>
            <CardText>
              TidyHive simplifies home management with an easy-to-use interface
              and a robust feature set allowing you organize everything in your
              home from day-to-day tasks to larger projects.
            </CardText>
            <CardActions border>
              {" "}
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>{" "}
            </CardActions>
            <CardMenu style={{ color: "fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <div>
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(data:image/jpeg;base64,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) center / cover",
                }}
              >
                Conway's Game of Life
              </CardTitle>
              <CardText>
                Created a simulation of the popular algorithm. The graph allows
                you to change the state of a specific cell and run through the
                algorithm to determine whether or not it is alive or dead.
              </CardText>
              <CardActions border>
                {" "}
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>{" "}
              </CardActions>
              <CardMenu style={{ color: "fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div classname="whole">
        <div className="category-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab>Tidy Hive</Tab>
            <Tab>Conway's Game of Life</Tab>
          </Tabs>
          <section className="projects-grid">
            <Grid className="projects-grid">
              <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
              </Cell>
            </Grid>
          </section>
        </div>
      </div>
    );
  }
}
export default Projects;
