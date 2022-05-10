import { Component } from "react";
import "../css/FollowComponent.css";

class Follow extends Component {
  openLink(social) {
    window.open(social.link, "_blank");
  }
  render() {
    return (
      <section id="follow">
        <div className="container text-center">
          <h4>C h e c k - M y ...,</h4>
        </div>
        <br />
        <div className="container horizontal-links">
          <h4>GitHub</h4>
          <img
            style={{ width: "35px", height: "35px", margin: "5px" }}
            src={this.props.details.profile_links.github.image}
            alt="GitHub"
            onClick={() =>
              this.openLink(this.props.details.profile_links.github)
            }
          />
          <br></br>
          <div>---</div>
          <img
            style={{ width: "35px", height: "35px", margin: "5px" }}
            src={this.props.details.profile_links.linkedin.image}
            alt="email"
            onClick={() =>
              this.openLink(this.props.details.profile_links.linkedin)
            }
          />
          <br></br>
          <h4>linkedin</h4>
        </div>
      </section>
    );
  }
}

export default Follow;
