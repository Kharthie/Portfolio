import "./App.css";
import React, { Component } from "react";
import Main from "./components/MainComponent";
import { motion } from "framer-motion";

class App extends Component {
  render() {
    const myStyle = {
      backgroundImage:
        "url('https://img.freepik.com/free-photo/flat-lay-top-view-workspace-office-white-desk-with-laptop-computer-coffee-cup-phone-using-business-background_44289-1202.jpg?w=740')",
      height: "120vh",
      // marginTop: "-10px",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    
    return (
      <div>
        <div style={myStyle}>
        <br></br>
          
          <motion.section
            id="top"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              className="container text-center jumbotron"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <motion.h1
                className="text-color-main"
                animate={{ fontWeight: 700 }}
                transition={{ delay: 1.3, duration: 1 }}
              >
                <span className="hi">H!</span>
                <span class="wave">👋</span> .,<br></br>
                <span className='hi'>This is</span>{" "}
                <span className="text-color-main-name">Khárthìe R ..,</span>
                <br />
                <span className='hi'>I am a</span> <span className="text-color-main-name1">🍃M</span>
                <span className="hi">ongo-Db ,</span>
                <br></br>
                <span className="text-color-main-name2">
                  <span className="dot">......</span>🟣E 
                </span>
                <span className="hi">xpress , </span>
               <br></br>
                <span className="text-color-main-name3">
                  <span className="dot">......</span>⚝R
                </span>
                <span className="hi">eact ,</span>
                <br></br>
                <span className="text-color-main-name4">
                  <span className="dot">......</span>📗N
                </span>
                <span className="hi">ode.Js ,</span>
                <br></br>
                <div class="typewriter">
                  <p class="typing-erase">Stack-Developer...,</p>
                </div>
              </motion.h1>
              {/* <br />
              <p>
                <motion.span
                  animate={{ scale: 1.15 }}
                  transition={{ delay: 1.4, duration: 1 }}
                  onClick={this.scrollToAbout}
                  className="know-more know-more--specs"
                >
                  ⮛ K n o w M o r e ⮛
                </motion.span>
              </p> */}
            </motion.div>
          </motion.section>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
