import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import mensho_tori_paitan_ramen1 from "assets/img/food/mensho_tori_paitan_ramen1.jpg";
import provisions_duck1 from "assets/img/food/provisions_duck1.jpg";
import le_butterblume_granola_maison1 from "assets/img/food/le_butterblume_granola_maison1.jpg";
import lawrence_buckwheat_crepe1 from "assets/img/food/lawrence_buckwheat_crepe1.jpg";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={mensho_tori_paitan_ramen1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons"/>Tori Paitan Ramen, 
                        Mensho Tokyo, San Francisco, CA
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={provisions_duck1}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Duck, 
                        Provisions 1268, Montreal, QC
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={le_butterblume_granola_maison1}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Granola Maison, 
                        Le Butterblume, Montreal, QC
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={lawrence_buckwheat_crepe1}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />Buckwheat Crepe, 
                        Lawrence, Montreal, QC
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
