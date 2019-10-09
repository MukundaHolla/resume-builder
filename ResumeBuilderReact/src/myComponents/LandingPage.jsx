import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import landingPageStyle from "assets/jss/landingPage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

// my components
import Parallax from "myComponents/Parallax.jsx";
import Header from "myComponents/Header/Header.jsx";
import AboutMe from "myComponents/Sections/AboutMe.jsx";
// import Resume from "myComponents/Sections/Resume.jsx";
import Projects from "myComponents/Sections/Projects.jsx";
import Skills from "myComponents/Sections/Skills.jsx";
import Hobbies from "myComponents/Sections/Hobbies.jsx";
import Footer from "myComponents/Footer/Footer.jsx";
import "./LandingPage.scss";
import landingBgVideo from "assets/video/landingBgVideo.mp4";
import landingBgVideoMobile from "assets/video/landingBgVideoMobile.mp4";
import profilePic1 from "assets/img/profile-img-1.jpg";
import profilePic4 from "assets/img/profile-img-4.jpg";
import { isMobileOnly } from "react-device-detect";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLandingVideo = this.handleLandingVideo.bind(this);
    document.getElementById("root").style.opacity = "0";
  }
  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }
  handleLandingVideo() {
    let renderedVideo = null;
    if (isMobileOnly) {
      renderedVideo = landingBgVideoMobile;
    } else {
      renderedVideo = landingBgVideo;
    }
    console.log("renderedVideo", renderedVideo);
    return renderedVideo;
  }

  render() {
    const { classes } = this.props;
    const profileImg = [profilePic4, profilePic1];
    return (
      <div id="landingPage-section" className="landingPage-container">
        <Header />
        <div className="profile">
          <Parallax filter backgroundVideo={this.handleLandingVideo()}>
            <div className={classes.container}>
              <div className="row">
                <div className="col-12 col-md-12">
                  <a href="#aboutMe-section">
                    <div className="profile__image">
                      <div id="f1_container">
                        <div id="f1_card" className="">
                          <div className="front face">
                            <img
                              src={profileImg[0]}
                              alt="ravi bp"
                              onLoad={() => {
                                console.log("loaded img");
                              }}
                            />
                          </div>
                          <div className="back face center">
                            <img src={profileImg[1]} alt="ravi bp 2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-12 col-md-12">
                  <div className="profile__title">
                    {isMobileOnly && <h1 className={"col-12"}>Ravi BP</h1>}
                    <h1 className={"col-12"}>MERN STACK</h1>
                    <h1 className={"col-12"}>DEVELOPER</h1>
                  </div>

                  <p className="profile__description">
                    Creative web developer dedicated to building fast and
                    responsive websites with quality code.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>
        </div>

        <div
          className={classNames(
            classes.main,
            classes.mainRaised + "  ml-0 mr-0 pl-0 pr-0"
          )}
        >
          <div className="landingPage-container__sections-container">
            <AboutMe id="aboutMe-div" />
            <Skills id="skills-div" />
            <Projects id="projects-div" />
            <Hobbies id="hobbies-div" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

// export default LandingPage;
export default withStyles(landingPageStyle)(LandingPage);
