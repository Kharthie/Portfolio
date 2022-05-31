import { Component } from "react";
import "../css/Footer.css";
import { Fade } from "react-reveal";

class Footer extends Component {
  render() {
    return (
      <>
        <div class="pg-footer">
          <footer class="footer">
            <svg
              class="footer-wave-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 100"
              preserveAspectRatio="none"
            >
              <path
                class="footer-wave-path"
                d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
              ></path>
            </svg>
            <div class="footer-content">
              <div class="footer-content-column">
                <div class="footer-logo">
                  <a class="footer-logo-link">
                    <span class="hidden-link-text"></span>
                  </a>
                </div>
                <div class="footer-menu">
                  <h1 class="footer-menu-name"></h1>
                  <ul id="menu-get-started" class="footer-menu-list">
                    <li
                      id="menu-item-173730"
                      class="menu-item menu-item-type-post_type menu-item-object-product menu-item-173730"
                      className="resume"
                    ></li>
                  </ul>
                </div>
              </div>

              <div class="footer-content-column">
                <Fade left>
                  <img
                    style={{
                      width: "350px",
                      height: "250px",
                      margin: "0px",
                      marginLeft: "0px",
                    }}
                    src="https://i.pinimg.com/originals/6d/7e/e7/6d7ee70638fe410dcfea433715eb7491.gif"
                  ></img>
                </Fade>

                <div class="footer-call-to-action"></div>
                <div class="footer-call-to-action">
                  <h3 class="footer-call-to-action-title">
                    {" "}
                    Contact Me At...,
                  </h3>
                  <p class="footer-call-to-action-link-wrapper">
                    <a href="https://www.google.com/gmail/" target="_blank">
                      kharthieramakrishnan@gmail.com{" "}
                    </a>
                  </p>
                </div>
                <Fade right>
                  <img
                    style={{
                      width: "35px",
                      height: "35px",
                      margin: "10px",
                      marginLeft: "60px",
                    }}
                    src={this.props.details.profile_links.email.image}
                  />
                </Fade>
              </div>
            </div>
            {/* <div class="progress-3"></div> */}
            <div class="footer-copyright">
              <div class="footer-copyright-wrapper">
                <p class="footer-copyright-text">
                  <a class="footer-copyright-link" target="_self">
                    {" "}
                    ©2021-22. | Developed By... | Kharthie R.{" "}
                  </a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default Footer;
