import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer2.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks2.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import MapSection from "./Sections/MapSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="FoodieAF"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/homepage_bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Map the food you love.</h1>
                <h4>
                  Everyone loves food. It brings us together, and each 
                  delicious dish has a story. Keep track of the pictures
                  you've taken of the food you love all in one place.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />Get Started
                </Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <SectionCarousel />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <MapSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
