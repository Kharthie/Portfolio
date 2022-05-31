import { Component } from "react";
import "../css/FollowComponent.css";
import { Bounce, Fade } from "react-reveal";

class Follow extends Component {
  openLink(social) {
    window.open(social.link, "_blank");
  }
  render() {
    const myStyle = {
      backgroundImage:
        "url('https://img.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg?size=626&ext=jpg&ga=GA1.2.561385715.1648191194')",
      height: "60vh",
      // marginTop: "-10px",
      //fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
    return (
      <>
        <div style={myStyle}>
          <section id="follow">
            <div className="container text-center">
              <Bounce top>
                <h4>V i e w - M y ...,</h4>
              </Bounce>
            </div>
            <br />
            <div className="container horizontal-links">
              <Fade left>
                <a href="https://github.com/Kharthie" target="_blank">
                  {" "}
                  <h4>GitHub</h4>
                </a>

                <img
                  style={{
                    width: "35px",
                    height: "35px",
                    margin: "5px",
                    cursor: "pointer",
                  }}
                  src={this.props.details.profile_links.github.image}
                  alt="GitHub"
                  onClick={() =>
                    this.openLink(this.props.details.profile_links.github)
                  }
                />
              </Fade>
              <br></br>
              <div>---</div>
              <Fade right>
                <img
                  style={{
                    width: "35px",
                    height: "35px",
                    margin: "5px",
                    cursor: "pointer",
                  }}
                  src={this.props.details.profile_links.linkedin.image}
                  alt="email"
                  onClick={() =>
                    this.openLink(this.props.details.profile_links.linkedin)
                  }
                />
                <br></br>

                <a
                  href="https://www.linkedin.com/in/kharthie-ramakrishnan-914589220/"
                  target="_blank"
                >
                  <h4>linkedin</h4>
                </a>
              </Fade>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Follow;
