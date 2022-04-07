import { Component } from "react";
import "../css/ProjectComponent.css";

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
            <img
              src={project.image}
              alt={project.title}
              width="22%"
              height="75%"
              style={{ margin: "auto"  }}
            />
          </div>
          <div className="col-12 col-sm-6">
            <h4>{project.title}</h4>
            <p className="text-justify">{project.description.para1}</p>
            <p className="text-justify">{project.description.para2}</p>
             <button
              className="view-projects view-projects--specs"
              style={{ borderRadius: "5px" , color:"black"}}
              onClick={() => this.onProjectClicked(project.id)}
            >
              View Project
            </button> 
             <button className="view-projects view-projects--specs"
              style={{ borderRadius: "5px" , color:"black"}}
              onClick={() => this.onProjectClicked1(project.id)}
              >
                Front-end
                </button> 
                <button className="view-projects view-projects--specs"
              style={{ borderRadius: "5px" , color:"black"}}
              onClick={() => this.onProjectClicked2(project.id)}
              >Back-end</button> 
           
          </div>
        </div>
      );
    });

    return (
      <>

       <section id="projects">
        <div className="container">
          <h1 className="text-center1">P r o j e c t s :</h1>
        

          {projects}
          <div className="text-center">
            <button
              style={{ marginTop: "30px", borderRadius: "5px",backgroundColor:"black" }}
              className="view-projects view-projects--specs"
             onClick={() =>
              this.openLink(this.props.details.profile_links.github)
            }
            >
             <h4 className="more"> More Projects</h4>
            </button> 
          

          </div>
          <div class="progress-4"></div>
        </div>
      </section> 

 
          



      </>
    );
  }
}

export default Projects;
