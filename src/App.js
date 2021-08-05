import "./App.css";
import {
  Container,
  Row,
  Col,
  Spinner,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fab, Slide, Collapse, Fade } from "@material-ui/core";
import React, { Component } from "react";
import Icon from "./Components/Icon";

// import { createTheme, ThemeProvider } from "@material-ui/core/styles";

// npm install -save styled components
// npm install react-bootstrap@next bootstrap@5.0.2

// npm install @material-ui/icons
// npm install @material-ui/core

class App extends Component {
  state = {
    showFab: false,
    showInbox: false,
    showSpinner: false,
  };

  toggleSpinner = () => {
    const doesShow = this.state.showSpinner;
    this.setState({
      showSpinner: !doesShow,
    });
  };

  toggleFabHandler = () => {
    const doesShow = this.state.showFab;
    this.setState({
      showFab: !doesShow,
    });
    if (!doesShow === false) {
      this.setState({
        showInbox: !doesShow,
        showSpinner: false,
      });
    }
  };

  toggleInboxHandler = () => {
    const doesShow = this.state.showInbox;
    this.setState({
      showInbox: !doesShow,
      showSpinner: true,
    });

    setTimeout(() => {
      this.toggleSpinner();
    }, 1000);
  };

  render() {
    const mainFab = {
      backgroundColor: "#2f80ed",
    };
    const childFab = {
      marginLeft: "10px",
      backgroundColor: "#F2F2F2",
    };

    return (
      <Container fluid>
        <Row className="My-primary">
          <Col xs lg="2" className="border-end border-white "></Col>
          <Col lg>
            {/* <div className="My-fab-wrapper"> */}
            <Row>
              <InputGroup className="mt-3">
                <FormControl
                  style={{ backgroundColor: "#828282", color: "white" }}
                  aria-label="Search"
                  placeholder="Search"
                />
              </InputGroup>
            </Row>
            <Row style={{ height: "30vh" }}></Row>
            <Row>
              <Collapse in={this.state.showInbox}>
                <Row style={{ color: "black", marginBottom: "15px" }}>
                  <Col></Col>
                  <Col
                    className="justify-content-center"
                    style={{
                      height: "50vh",
                      backgroundColor: "white",
                      marginRight: "15px",
                    }}
                  >
                    <Row style={{ margin: "10px" }}>
                      <input type="text" placeholder="Search"></input>
                    </Row>
                    <Row
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "100px" }}
                    >
                      <Fade in={this.state.showSpinner}>
                        <Spinner animation="border" />
                      </Fade>
                    </Row>
                  </Col>
                </Row>
              </Collapse>
              <Row>
                <Slide direction="left" in={this.state.showFab}>
                  <Col className="d-flex justify-content-end">
                    <Row>
                      <Col>
                        <Fab style={childFab} aria-label="task">
                          <Icon variant="task" color="#F8B76B"></Icon>
                        </Fab>
                      </Col>

                      <Col>
                        <Fab
                          onClick={this.toggleInboxHandler}
                          style={childFab}
                          aria-label="inbox"
                        >
                          <Icon variant="inbox" color="#8885FF"></Icon>
                        </Fab>
                      </Col>
                    </Row>
                  </Col>
                </Slide>
                <Col xs lg="1" className="d-flex justify-content-end">
                  <Fab
                    onClick={this.toggleFabHandler}
                    style={mainFab}
                    aria-label="main"
                  >
                    <Icon variant="thunder"></Icon>
                  </Fab>
                </Col>
              </Row>
            </Row>

            {/* </div> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
