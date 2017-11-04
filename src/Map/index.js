import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { connect } from 'react-redux';

import { actions } from './redux';

class Map extends Component {
    constructor(p){
        super(p);
        this.geocoder = new window.google.maps.Geocoder();
    }
    render() {
        const { pos, getAddress } = this.props;
        return (
            <GoogleMap
            defaultZoom={17}
            defaultCenter={{ lat: 6.4528323, lng: 3.3909381 }}
            onClick={(evt) => getAddress(this.geocoder, evt.latLng)}
            >
                {pos && <Marker
                    icon="/assets/icons/Combined%20Shape%20Copy.svg"
                    position={pos} />}
            </GoogleMap>
        );
    }
}

export default withScriptjs(withGoogleMap(connect((state) => ({
    pos: state.Map.pos
}), actions)(Map)))
