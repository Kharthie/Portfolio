import { Component } from "react";
import "../css/SkillsComponent.css";
import { Bounce } from "react-reveal";

class Skills extends Component {
  render() {
    const skills = this.props.details.skills.map((skill) => {
      return (
        <>
          <div className="col-12 col-md-4 skill-tile text-center">
            <img src={skill.image} alt="Skill" width="45%" height="45%" />
            <p>{skill.name}</p>
          </div>
        </>
      );
    });
    return (
      <>
        <section id="skills">
          <div className="container">
            <Bounce top><h1 className="text-center">S k i l l s : </h1></Bounce>
            
            <div className="row" style={{ marginTop: "30px" }}>
              {skills}
              <div class="skills">
                <div class="skills-bar">
                  <div className="fntend">
                    <h2>. . . F r o n t - E n d . . .</h2>
                  </div>

                  <div class="bar">
                    <div class="info">
                      <span> H T M L </span>
                    </div>
                    <div class="progress-line">
                      <span class="html"></span>
                    </div>
                    <div class="bar">
                      <div class="info">
                        <span> C S S </span>
                      </div>
                      <div class="progress-line">
                        <span class="css"></span>
                      </div>
                      <div class="bar">
                        <div class="info">
                          <span> J A V A S C R I P T </span>
                        </div>
                        <div class="progress-line">
                          <span class="mongo"></span>
                        </div>

                        <div class="bar">
                          <div class="info">
                            <span> R E A C T </span>
                          </div>
                          <div class="progress-line">
                            <span class="javascript"></span>
                          </div>
                        </div>
                        <div className="fntend">
                          <h2>. . . B a c k - E n d . . .</h2>
                        </div>

                        <div class="bar">
                          <div class="info">
                            <span> N O D E - J S </span>
                          </div>
                          <div class="progress-line">
                            <span class="node"></span>
                          </div>

                          <div class="bar">
                            <div class="info">
                              <span> E X P R E S S </span>
                            </div>
                            <div class="progress-line">
                              <span class="c"></span>
                            </div>

                            <div class="bar">
                              <div class="info">
                                <span> M O N G O - DB </span>
                              </div>
                              <div class="progress-line">
                                <span class="javascript"></span>
                              </div>
                              {/* <img
                                style={{
                                  width: "150px",
                                  margin: "10px",
                                  marginLeft: "480px",
                                }}
                                src="https://bera-journals.onlinelibrary.wiley.com/ux3/releasedAssets/images/spinner.gif"
                              ></img> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div class="progress-5"></div>
          <div class="container-skill">
          <div class="col">
            <h2 class="titulo">Front - End</h2>
            <ul class="skill">
              <li>
                <span class="blueline html"></span>
                <em>HTML - 90%</em>
              </li>
              <li>
                <span class="blueline css"></span>
                <em>CSS - 90%</em>
              </li>
              <li>
                <span class="blueline javascript"></span>
                <em>JS - 90%</em>
              </li>
              <li>
                <span class="blueline php"></span>
                <em>React - 90%</em>
              </li>

              <li>
                <span class="blueline jquery"></span>
                <em>TypeScript - 85%</em>
              </li>
            </ul>
          </div>
          <div class="col">
            <h2 class="plataformas titulo">Back - End</h2>
            <ul class="skill">
              <li>
                <span class="greenline wordpress"></span>
                <em>Node.JS - 85%</em>
              </li>
              <li>
                <span class="greenline prestashop"></span>
                <em>MongoDB - 90%</em>
              </li>
              <li>
                <span class="greenline joomla"></span>
                <em>Express - 85%</em>
              </li>
               
            </ul>
          </div>
          <div class="col">
            <h2 class="programas titulo">Tools</h2>
            <ul class="skill">
              <li>
                <span class="redline dreamweaver"></span>
                <em>VS-Code - 95%</em>
              </li>
              <li>
                <span class="redline illustrator"></span>
                <em>PostMan - 95%</em>
              </li>
              <li>
                <span class="redline photoshop"></span>
                <em>Github - 95%</em>
              </li>
              <li>
                <span class="redline premiere"></span>
                <em>Heroko - 95%</em>
              </li>
              <li>
                <span class="redline flash"></span>
                <em>Netlify - 95%</em>
              </li>
            </ul>
          </div>
        </div> */}
      </>
    );
  }
}

export default Skills;
