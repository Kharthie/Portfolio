import { Component } from "react";
import "../css/FollowComponent.css";

class Follow extends Component {
  openLink(social) {
    window.open(social.link, "_blank");
  }
  render() {
    const myStyle = {
      backgroundImage:
        "url('https://images.unsplash.com/photo-1531265726475-52ad60219627?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500')",
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
          <h4>V i e w - M y ...,</h4>
        </div>
        <br />
        <div className="container horizontal-links">
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
          <br></br>
          <div>---</div>
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

          <a href="https://www.linkedin.com/in/kharthie-ramakrishnan-914589220/" target="_blank">
            <h4>linkedin</h4>
          </a>
        </div>
      </section>
      </div>
      </>
    );
  }
}

export default Follow;
