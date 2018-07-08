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

const _ = require("lodash");

const MapWithASearchBox = compose(
  withStateHandlers(() => ({
    isOpen: false,
  }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      })
    }),
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAdz_DA_uiQDeYmYfVJMWW7YH8phMC0UIA&v=3&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  lifecycle({
    componentWillMount() {
      const refs = {};

      // keep track of all restaurants the user has added as well as the currently selected restaurant
      let restaurant_locations = [];
      let current_restaurant = [];
      let restaurant_markers = [];

      this.setState({
        bounds: null,
        center: {
          lat: 42.3601, lng: -71.0589
        },
        markers: [],
        onMapMounted: ref => {
          refs.map = ref;
        },
        onSearchBoxMounted: ref => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          const bounds = new google.maps.LatLngBounds();

          places.forEach(place => {
            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport)
            } else {
              bounds.extend(place.geometry.location)
            }

            //when user searches for a place, insert details of the currently selected 
            //restaurant into current_restaurant
            current_restaurant = [place.name, place.geometry.location.lat(), place.geometry.location.lng()];
          });
          const nextMarkers = places.map(place => ({
            position: place.geometry.location,
          }));
          const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

          this.setState({
            center: nextCenter,
            markers: nextMarkers
          });
        },
        handleAddRestaurantClick: () => {
          //store the restaurant the user added in restaurant_locations
          restaurant_locations.push(current_restaurant);
          restaurant_markers.push([current_restaurant[1],current_restaurant[2]]);

          // for debugging purposes
          console.clear();
          console.log("Current values in restaurant_locations:");
          restaurant_locations.forEach(restaurant => {
            console.log(restaurant);
          });
          console.log("Current values in restaurant_markers:");
          restaurant_markers.forEach(restaurant => {
            console.log(restaurant);
          });
        }
      })
    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onIdle}
  >
    <SearchBox
      ref={props.onSearchBoxMounted}
      bounds={props.bounds}
      controlPosition={google.maps.ControlPosition.TOP_LEFT}
      onPlacesChanged={props.onPlacesChanged}
    >
      <input
        type="text"
        placeholder="Search"
        style={{
          boxSizing: `border-box`,
          border: `1px solid transparent`,
          width: `240px`,
          height: `32px`,
          marginTop: `27px`,
          padding: `0 12px`,
          borderRadius: `3px`,
          boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
          fontSize: `14px`,
          outline: `none`,
          textOverflow: `ellipses`,
        }}
      />
    </SearchBox>
    <Marker
      position={{ lat: 42.3601, lng: -71.0589 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
        {<img src="https://pbs.twimg.com/media/DYGA5cFUMAc1zfY.jpg" alt="" />}
      </InfoWindow>}
    </Marker>
    {props.markers.map((marker, index) =>
      <Marker key={index} position={marker.position} />
    )}
    <Button color="info" onClick={props.handleAddRestaurantClick}>Add</Button>
  </GoogleMap>
);

class Map extends React.Component {
  render() {
    return (
      <MapWithASearchBox />
    );
  }
}

export default withStyles(productStyle)(Map);