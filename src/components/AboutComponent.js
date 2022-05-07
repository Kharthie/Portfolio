import { Component } from "react";
import "../css/AboutComponent.css";
import { motion } from "framer-motion";
import { Card, CardContent } from "@material-ui/core";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.details);
  }

  render() {
    return (
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6" style={{ padding: "20px" }}>

             <figure class="swing">
              <motion.img
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 40 }}
                src={this.props.details.profile_image}
                alt="Profile"
                width="65%"
                height="90%"
              />
             
              </figure>

            </div>
            <motion.div
              className="col-12 col-sm-6"
              style={{
                padding: "25px",
              }}
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", delay: 0.8, stiffness: 40 }}
            >
              <h1>About Me...,</h1>
              <br />
              <h5>{this.props.details.about_me.para1}</h5>
              <p>{this.props.details.about_me.para2}</p>
              <p>{this.props.details.about_me.para3}</p>
              <p>{this.props.details.about_me.para4}</p>
              <p>{this.props.details.about_me.para5}</p>
            </motion.div>
          </div>
        </div>
        <div className="container">
          <div
            className="row"
            style={{
              marginTop: "40px",
            }}
          >
            <motion.div
              className="col-12 col-md-4"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            >
              <Card
                className="about-card-style"
                variant="outlined"
                style={{
                  backgroundColor: "#27292d",
                }}
              >
                <CardContent>
                  <a style={{ color: "white", textDecoration: "none" }}>
                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <b style={{ fontSize: "30px" }}>5+ Projects & 20+ Mini Projects</b>
                      <br />
                      are Successfully Deployed.
                    </p>
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="col-12 col-md-4"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            >
              <Card
                className="about-card-style"
                variant="outlined"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "#27292d",
                }}
              >
                <CardContent>
                  <a style={{ color: "white", textDecoration: "none" }}>
                  <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <b style={{ fontSize: "30px" }}>Click to view</b>
                      
                      <div>
                      <span class="m_scroll_arrows unu"></span>
			<span class="m_scroll_arrows doi"></span>
			<span class="m_scroll_arrows trei"></span>
                      </div>
                    </p>
                     <div className="resume-link">
                    <a href="https://drive.google.com/file/d/1C_r_VAtF2TguL-JctHl3YgC6xDzG33zw/view?usp=sharing" target="_blank">
                      M Y - R E S U M E{" "}
                    </a>
                    </div>

                    <div class="progress-9">
                    
                    </div><br></br>
                    {/* <a href="https://drive.google.com/file/d/1O1TzcbLtFYBEHf1oCwNjtbW4AUHt62U9/view" target="_blank">
                      MY RESUME{" "}
                    </a> */}
                   
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="col-12 col-md-4"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
            >
              <Card
                className="about-card-style"
                variant="outlined"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "#27292d",
                }}
              >
                <CardContent>
                  <a style={{ color: "white", textDecoration: "none" }}>
                    <p
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <b style={{ fontSize: "30px" }}> 5+ Participations</b>
                      <br />
                      at various Events / Hackathons / Programs / Workshops.
                    </p>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
