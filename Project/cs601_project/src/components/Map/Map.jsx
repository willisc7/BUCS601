import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

// react-google-maps components
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import SearchBox from "react-google-maps/lib/components/places/SearchBox";
import { compose, withProps, lifecycle, withStateHandlers } from "recompose";
import RestaurantMarker from './RestaurantMarker.jsx'

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
                        images: [],
                        selected_image: null,
                        restaurant_markers,
                        current_place: {
                            'id': null,
                            'name': null,
                            'longitude': null,
                            'latitude': null
                        },
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
                        },
                        handleAddImage: () => {
                            if (this.state.current_place.id === null || this.state.selected_image === null){
                                return
                            }
                            
                            // add the unique ID of currently selected place and selected_image to image array
                            let images = [...this.state.images]
                            images.push([this.state.current_place.id, this.state.selected_image])
                            this.setState({ images })

                            console.log(this.state.images)
                        },
                        handleImageChosen: (event) => {
                            // change selected_image to the image the user just chose
                            this.setState({ selected_image: event.target.files[0] })
                        }
                    })
                }
            }),
            withScriptjs,
            withGoogleMap
        )(props =>
            <GridContainer justify="center">
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
                        <RestaurantMarker key={props.id} images={props.images} {...props}>
                        </RestaurantMarker>
                    )}
                </GoogleMap>
                <GridItem xs={3}>
                    <Button color="info" onClick={props.handleAddRestaurantClick}>Add Restaurant</Button>
                </GridItem>

                <GridItem xs={3}>
                    {/* Choose Image button changes the state of selected_image */}
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        hidden
                        onChange={props.handleImageChosen}
                    />
                    <label htmlFor="contained-button-file">
                        <Button color="danger"
                            variant="contained"
                            component="span"
                        >
                            Choose Image
                    </Button>
                    </label>
                </GridItem>

                <GridItem xs={3}>
                    {/* Add Image button adds the selected_image to the images state array */}
                    <Button onClick={props.handleAddImage}>Add Image</Button>
                </GridItem>

            </GridContainer>
        );

        return (
            <MapWithASearchBox />
        );
    }
}

export default withStyles(productStyle)(Map);