import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import Button from "components/CustomButtons/Button.jsx";

// react-google-maps components
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import { compose, withProps, lifecycle, withStateHandlers } from "recompose";

/*global google*/
export default class Map extends React.Component {

  // State.
  state = {markers: []}

  // Render.
  render() {

    // Map With A Marker.
    const MapWithAMarker = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=...&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `400px`}}/>,
        mapElement: <div style={{height: `100%`}}/>
      }),
      withScriptjs,
      withGoogleMap
    )(props =>
      <GoogleMap defaultZoom={props.zoom} defaultCenter={{lat: props.lat, lng: props.lng}}>
        {props.markers.map(props => <RestaurantMarker key={props.name} {...props}/>)}
      </GoogleMap>
    )

    // Return Map.
    return (
      <section id="map">
        <div class= "container">
        <h3 class="info-title"><span class="info-title-span">Tasty and Convenient.</span></h3>
          <div class="row">
            <div class="col-md-12 text-left">
              <MapWithAMarker 
                markers={this.state.markers}
                lat={37.7749}
                lng={122.4194}
                zoom={17}
              />
            </div>
          </div>
          <div class="row text-center">
            Text
          </div>
        </div>
      </section>
    )

  }

  // Did Mount.
  componentDidMount() {

    // Download Restaurants.
    database.ref('..').on('value', restaurants => {

      // Restaurants Placeholder.
      let markers = []

      // Map Restaurants To List.
      restaurants.forEach(restaurant => {
        markers.push({
          'name': restaurant.key,
          'longitude': restaurant.val().lng,
          'latitude': restaurant.val().lat
        })
      })

      // Update State.
      this.setState({markers})

    })

  }

}


// RestaurantMarker.
class RestaurantMarker extends React.Component {

  // State.
  state = {open: false}

  // Render.
  render() {

    // Extract Props.
    const {name, latitude, longitude} = this.props

    // Return Restaurant Marker Component.
    return (
      <Marker key={name} position={{ lat: latitude, lng: longitude }}>
        {this.state.open && (
          <InfoWindow onClick={() => this.setState(state => ({open: !state.open}))}> {name} </InfoWindow>
        )}
      </Marker>
    )

  }

}