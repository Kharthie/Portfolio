import { Card, CardHeader, CardMedia, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { Component } from "react";
import "../css/EducationComponent.css";
import { Flip, Slide, Bounce } from "react-reveal";

class Education extends Component {
  render() {
    const myStyle = {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1530543787849-128d94430c6b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870')",
      height: "120vh",
      // marginTop: "-10px",
      //fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    const myProfileDetails = this.props.details;
    return (
      <>
        <div style={myStyle}>
          <section id="education">
            <div className="container">
              <Bounce top>
                <h1 className="text-center">E d u c a t i o n :</h1>
              </Bounce>

              <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-12 col-md-4 edu-tile">
                  <Slide left>
                    <Card
                      className="card-style"
                      variant="outlined"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        backgroundColor: "rgb(46, 47, 52)",
                      }}
                    >
                      <Slide left>
                        <CardHeader
                          style={{ color: "white" }}
                          className="text-center"
                          title="Graduation "
                          subheader={
                            <Typography style={{ color: "white" }}>
                              {myProfileDetails.education.college.timeline}
                            </Typography>
                          }
                        />
                        {/* <CardMedia
                  component="img"
                  style={{
                    height: "60px",
                    width: "60px",
                  }}
                  image="/assets/images/college.png"
                  alt="Graduation"
                /> */}
                        <img
                          style={{
                            height: "60px",
                            width: "60px",
                          }}
                          src="https://i.pinimg.com/originals/b8/51/5b/b8515b3a98b5cd2250448b32b794c2b4.gif"
                        ></img>

                        <CardContent>
                          <p>
                            <b>Course : </b>
                            {myProfileDetails.education.college.course}
                          </p>
                          <p>
                            <b>CGPA : </b>
                            {myProfileDetails.education.college.grade}
                          </p>
                          <p>
                            <b>College Name : </b>
                            {myProfileDetails.education.college.name}
                          </p>
                        </CardContent>
                      </Slide>
                    </Card>
                  </Slide>
                </div>

                <div className="col-12 col-md-4 edu-tile">
                  <Flip top>
                    <Card
                      className="card-style"
                      variant="outlined"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        backgroundColor: "rgb(46, 47, 52)",
                      }}
                    >
                      <Flip top>
                        <CardHeader
                          className="text-center"
                          title="Higher Secondary School"
                          subheader={
                            <Typography style={{ color: "white" }}>
                              {
                                myProfileDetails.education
                                  .higher_secondary_school.timeline
                              }
                            </Typography>
                          }
                        />
                        <CardMedia
                          component="img"
                          style={{
                            height: "60px",
                            width: "60px",
                          }}
                          image="/assets/images/school.png"
                          alt="Graduation"
                        />

                        <CardContent>
                          <p>
                            <b>Course : </b>
                            {
                              myProfileDetails.education.higher_secondary_school
                                .course
                            }
                          </p>
                          <p>
                            <b>CGPA : </b>
                            {
                              myProfileDetails.education.higher_secondary_school
                                .grade
                            }
                          </p>
                          <p>
                            <b>School Name : </b>
                            {
                              myProfileDetails.education.higher_secondary_school
                                .name
                            }
                          </p>
                        </CardContent>
                      </Flip>
                    </Card>
                  </Flip>
                </div>

                <div className="col-12 col-md-4 edu-tile">
                  <Slide right>
                    <Card
                      className="card-style"
                      variant="outlined"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        backgroundColor: "rgb(46, 47, 52)",
                      }}
                    >
                      <Slide right>
                        <CardHeader
                          className="text-center"
                          title="Secondary School"
                          subheader={
                            <Typography style={{ color: "white" }}>
                              {
                                myProfileDetails.education.secondary_school
                                  .timeline
                              }
                            </Typography>
                          }
                        />
                        {/* <CardMedia
                  component="img"
                  style={{
                    height: "60px",
                    width: "60px",
                  }}
                  image="/assets/images/school.png"
                  alt="Graduation"
                /> */}
                        <img
                          style={{
                            height: "60px",
                            width: "60px",
                          }}
                          src="https://www.pinclipart.com/picdir/big/121-1218826_school-house-clipart-school-clip-art-little-red.png"
                        ></img>

                        <CardContent>
                          <p>
                            <b>CGPA : </b>
                            {myProfileDetails.education.secondary_school.grade}
                          </p>
                          <p>
                            <b>School Name : </b>
                            {myProfileDetails.education.secondary_school.name}
                          </p>
                        </CardContent>
                      </Slide>
                    </Card>
                  </Slide>
                </div>
              </div>
            </div>
            {/* <img
          style={{
            margin: "10px",
            width: "200px",
            height: "200px",
            marginLeft: "600px",
          }}
          src="https://static.wixstatic.com/media/94d288_9e9278611d2f4e2daddeb9b86b2ed08d~mv2.gif"
        ></img> */}
          </section>
        </div>
      </>
    );
  }
}

export default Education;
