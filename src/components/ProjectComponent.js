import { Component } from "react";
import "../css/ProjectComponent.css";
import { Bounce } from "react-reveal";

class Projects extends Component {
  openLink(social) {
    window.open(social.link, "_blank");
  }

  onProjectClicked(id) {
    var projObj = this.props.details.projects.filter(
      (project) => project.id === id
    )[0];
    window.open(projObj.link, "_blank");
  }
  onProjectClicked1(id) {
    var projObj1 = this.props.details.projects.filter(
      (project) => project.id === id
    )[0];
    window.open(projObj1.link1, "_blank");
  }
  onProjectClicked2(id) {
    var projObj2 = this.props.details.projects.filter(
      (project) => project.id === id
    )[0];
    window.open(projObj2.link2, "_blank");
  }

  openProjectsURL() {
    window.open(this.props.details.profile_links.github.link, "_blank");
  }

  openProjectsURL() {
    window.open(this.props.details.profile_links.github.link1, "_blank");
  }

  openProjectsURL() {
    window.open(this.props.details.profile_links.github.link2, "_blank");
  }

  render() {
    const projects = this.props.details.projects.map((project) => {
      return (
        <div key={project.id} className="row" style={{ marginTop: "30px" }}>
          <div className="col-12 col-sm-6" style={{ textAlign: "center" }}>
            <Bounce left>
              <img
                src={project.image}
                alt={project.title}
                width="22%"
                height="75%"
                style={{ margin: "auto" }}
              />
            </Bounce>
          </div>
          <div className="col-12 col-sm-6">
            <Bounce right>
              <h4>{project.title}</h4>
              <p className="text-justify">{project.description.para1}</p>
              <p className="text-justify">{project.description.para2}</p>
              <p className="text-justify">{project.description.para3}</p>
              <p className="text-justify">{project.description.para4}</p>
            </Bounce>
            {/* ←<button
              className="view-projects view-projects--specs"
              style={{ borderRadius: "5px", color: "black" }}
              onClick={() => this.onProjectClicked(project.id)}
            >
              
              <img src="https://img.icons8.com/ios-glyphs/30/000000/project.png"/>
              View Project
            </button>--- */}
            ←
            <button
              className="view-projects view-projects--specs"
              style={{ borderRadius: "5px", color: "black" }}
              onClick={() => this.onProjectClicked1(project.id)}
            >
              <img src="https://img.icons8.com/material-rounded/24/000000/github.png" />
              Front-end
            </button>
            ---
            <button
              className="view-projects view-projects--specs"
              style={{ borderRadius: "5px", color: "black" }}
              onClick={() => this.onProjectClicked(project.id)}
            >
              <img src="https://img.icons8.com/ios-glyphs/30/000000/project.png" />
              View Project
            </button>
            ---
            <button
              className="view-projects view-projects--specs"
              style={{ borderRadius: "5px", color: "black" }}
              onClick={() => this.onProjectClicked2(project.id)}
            >
              <img src="https://img.icons8.com/material-rounded/24/000000/github.png" />
              Back-end
            </button>
            →
          </div>
          
        </div>
      );
    });

    return (
      <>
        <section id="projects">
          <div className="container">
            <Bounce top>
            <h1 className="text-center1">P r o j e c t s :</h1>
            </Bounce>
            

            {projects}
            <div className="text-center">
              <div
                style={{
                  marginTop: "30px",
                  borderRadius: "5px",
                  backgroundColor: "black",
                }}
                className="view-projects view-projects--specs"
                //  onClick={() =>
                //   this.openLink(this.props.details.profile_links.github)
                // }
              >
                <h4 className="more">For More Projects Visit My GitHub.</h4>
              </div>
            </div>
            <img
              style={{
                width: "150px",
                margin: "10px",
                marginLeft: "480px",
              }}
              src="https://thumbs.gfycat.com/HeavenlyCoordinatedGermanwirehairedpointer-size_restricted.gif"
            ></img>
            {/* <div class="progress-4"></div> */}
          </div>
        </section>
      </>
    );
  }
}

export default Projects;
