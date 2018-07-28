import React from "react";

// react-google-maps components
import { Marker, InfoWindow } from "react-google-maps";

class RestaurantMarker extends React.Component {

    state = {
        isOpen: [],
        onToggleOpen: (marker_id) => {
            let isOpen = [...this.state.isOpen]

            // if array is empty, add entry for the marker
            if (isOpen.length === 0) {
                isOpen.push([marker_id], [false])
                this.setState({ isOpen })
                return
            }

            // find the array with marker_id in it and flip its state
            isOpen[1] = !isOpen[1]

            // update isOpen state
            this.setState({ isOpen })
        }
    }

    render() {
        const { id, name, latitude, longitude } = this.props

        return (
            <Marker key={id}
                name={name}
                position={{ lat: latitude, lng: longitude }}
                onClick={() => { this.state.onToggleOpen(id) }}
            >
                {this.state.isOpen[1] && <InfoWindow id={id}
                    onCloseClick={() => { this.state.onToggleOpen(id) }}
                >
                    <img src="https://pbs.twimg.com/media/DYGA5cFUMAc1zfY.jpg" alt="" />
                </InfoWindow>}
            </Marker>
        )

    }

}

export default RestaurantMarker;