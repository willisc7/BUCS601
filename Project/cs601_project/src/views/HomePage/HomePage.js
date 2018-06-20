import React from "react";
import { GoogleApiWrapper } from 'google-maps-react'
import GoogleApiComponent from "components/GoogleMaps/GoogleApiComponent.js";

class Container extends React.Component {
  render() {
    if (!this.props.loaded) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div>Map will go here</div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyCqT0NT-5-nGdM3h6JDRqsCBq1ya_QuVJ0'
})(Container)
