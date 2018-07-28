import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import Button from "components/CustomButtons/Button.jsx";

// react-google-maps components
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import { compose, withProps, lifecycle, withStateHandlers } from "recompose";
import RestaurantMarker from './RestaurantMarker.jsx'
import UploadImage from './UploadImage.jsx'

/*global google*/

class Map extends React.Component {

    state = { restaurant_markers: [] }

    render() {
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
                mapElement: <div style={{ height: `100%` }} />
            }),
            lifecycle({
                componentWillMount() {
                    const refs = {};

                    let restaurant_markers = [];

                    this.setState({
                        bounds: null,
                        center: {
                            lat: 42.3601, lng: -71.0589
                        },
                        markers: [],
                        restaurant_markers,
                        current_place: null,
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
                            });

                            const nextMarkers = places.map(place => ({
                                position: place.geometry.location,
                            }));
                            const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

                            this.setState({
                                center: nextCenter,
                                markers: nextMarkers,
                                current_place: places[0]
                            });
                        },
                        handleAddRestaurantClick: () => {
                            let current_restaurant = {
                                'id': this.state.current_place.id,
                                'name': this.state.current_place.name,
                                'longitude': this.state.current_place.geometry.location.lng(),
                                'latitude': this.state.current_place.geometry.location.lat()
                            }

                            //store the restaurant the user added in restaurant_locations
                            restaurant_markers.push(current_restaurant);

                            // for debugging purposes
                            console.log("Current values in restaurant_locations:");
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

                {/* Marker placed when user searches for a location */}
                {props.markers.map((marker, index) =>
                    <Marker key={index} position={marker.position} onClick={props.onToggleOpen}>
                    </Marker>
                )}

                {/* Place all markers stored in restaurant_markers */}
                {props.restaurant_markers.map(props =>
                    <RestaurantMarker key={props.id} {...props}>
                    </RestaurantMarker>
                )}

                <Button color="info" onClick={props.handleAddRestaurantClick}>Add</Button>
                <UploadImage />
            </GoogleMap>
        );

        return (
            <MapWithASearchBox />
        );
    }
}

export default withStyles(productStyle)(Map);