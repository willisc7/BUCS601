import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react'

export class Container extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>Map will go here</div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyCqT0NT-5-nGdM3h6JDRqsCBq1ya_QuVJ0'
})(Container)