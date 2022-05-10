import { Card, CardHeader, CardMedia, Typography } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { Component } from "react";
import "../css/EducationComponent.css";

class Education extends Component {
  render() {
    const myProfileDetails = this.props.details;
    return (
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
                    {myProfileDetails.education.higher_secondary_school.course}
                  </p>
                  <p>
                    <b>Percentage : </b>
                    {myProfileDetails.education.higher_secondary_school.grade}
                  </p>
                  <p>
                    <b>School Name : </b>
                    {myProfileDetails.education.higher_secondary_school.name}
                  </p>
                </CardContent>
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
                <CardHeader
                  className="text-center"
                  title="Secondary School"
                  subheader={
                    <Typography style={{ color: "white" }}>
                      {myProfileDetails.education.secondary_school.timeline}
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
              </Card>
            </div>
          </div>
        </div>
        <img
          style={{
            margin: "10px",
            width: "200px",
            height: "200px",
            marginLeft: "600px",
          }}
          src="https://static.wixstatic.com/media/94d288_9e9278611d2f4e2daddeb9b86b2ed08d~mv2.gif"
        ></img>
      </section>
    );
  }
}

export default Education;
