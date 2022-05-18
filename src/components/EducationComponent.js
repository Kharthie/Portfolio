import { Card, CardHeader, CardMedia, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { Component } from "react";
import "../css/EducationComponent.css";
import { Flip, Slide } from "react-reveal";

class Education extends Component {
  render() {
    const myStyle = {
      backgroundImage:
        "url('https://media.istockphoto.com/photos/business-cards-stock-illustration-picture-id1309884850?b=1&k=20&m=1309884850&s=170667a&w=0&h=OgY9k_oZwDYs8E6gdG-20cmX3Kv_WCDnCqxG9BmCoIs=')",
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
              <h1 className="text-center">E d u c a t i o n :</h1>
              <div className="row" style={{ marginTop: "30px" }}>
                <div className="col-12 col-md-4 edu-tile">
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
                </div>

                <div className="col-12 col-md-4 edu-tile">
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
                              myProfileDetails.education.higher_secondary_school
                                .timeline
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
                          <b>Percentage : </b>
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
                </div>

                <div className="col-12 col-md-4 edu-tile">
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
