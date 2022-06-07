import { Component } from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../css/ExperienceComponent.css";
import { Card, CardHeader } from "@material-ui/core";
import { Zoom , Bounce } from "react-reveal";

class Experience extends Component {
  render() {
    // const myStyle = {
    //   backgroundImage:
    //     "url('https://img.freepik.com/free-photo/blue-dark-gradient-texture-wall-background_28629-888.jpg?size=626&ext=jpg&ga=GA1.2.561385715.1648191194')",
    //   height: "110vh",
    //   // marginTop: "-10px",
    //   //fontSize: "50px",
    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    // };
    const experiences = this.props.details.experiences.map((experience) => {
      return (
        <>
        
          <div key={experience.id} className="row" style={{ padding: "10px" }}>
          <Zoom top>
            <Card
              className="root"
              variant="outlined"
              style={{
                backgroundColor: "#27292d",
              }}
            >
              <Zoom top>
                <CardHeader
                  title={
                    <Typography variant="h4" gutterBottom> 
                      {experience.company}
                      <a href="https://www.guvi.in/verify-certificate?id=4566O31R815k364CgQ" target="_blank">My Full Stack Development Certificate</a>
                    </Typography>
                  }
                />

                <CardContent>
                  {experience.positions.map((position) => {
                    return (
                      <div key={position.id}>
                        <Typography variant="h5">
                          {position.position}
                        </Typography>
                        <Typography className="pos">
                          {position.timeline}
                        </Typography>
                        <Typography variant="body2">
                          {position.description}
                        </Typography>
                        <br />
                        
                      </div>
                    );
                  })}
                </CardContent>
              </Zoom>
            </Card>
            </Zoom>
          </div>
        </>
      );
    });

    return (
      <>
      {/* <div style={myStyle}> */}

     
      <section id="experience">
        <div className="container">
          <Bounce top>
          <h1 className="text-center">C e r t i f i c a t i o n : </h1>
          </Bounce>
          
          <br />
          <br />
          {experiences}
         
        </div>
       
      </section>
      {/* </div> */}
      </>
    );
  }
}

export default Experience;
