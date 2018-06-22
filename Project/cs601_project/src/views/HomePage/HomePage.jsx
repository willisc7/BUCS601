import React from "react";
import GoogleApiComponent from "components/GoogleMaps/GoogleApiComponent.js";
import SectionCarousel from "./Sections/SectionCarousel.jsx";

class Container extends React.Component {
  render() {
    if (!this.props.loaded) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div>
        <SectionCarousel />
        <div>Map will go here</div>
      </div>
    )
  }
}

export default (GoogleApiComponent({
  apiKey: 'AIzaSyCqT0NT-5-nGdM3h6JDRqsCBq1ya_QuVJ0'
}))(Container)
