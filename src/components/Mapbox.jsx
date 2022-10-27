import React from "react";
import 'mapbox-gl/dist/mapbox-gl.css'
import { ImHome3 } from 'react-icons/im';
import Map, {
    Marker,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl
} from 'react-map-gl';
const TOKEN = 'pk.eyJ1IjoieWVhc2lyMTEiLCJhIjoiY2w5b2kzaHNlMGoxNTNwbzY2MHdnbjB4NCJ9.mRL-d3PWB08xzEMDnOWUog'; // Set your mapbox token here

const Mapbox = ({ properties }) => {
    return (
        <div className="h-full w-full px-5">
            <div className="h-full w-full overflow-hidden rounded-3xl">
                <Map
                    initialViewState={{
                        latitude: 40,
                        longitude: -100,
                        zoom: 1,
                        bearing: 0,
                        pitch: 0
                    }}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    mapboxAccessToken={TOKEN}
                >
                    <GeolocateControl position="top-left" />
                    <FullscreenControl position="top-left" />
                    <NavigationControl position="top-left" />
                    <ScaleControl />

                    {properties.map((propertie, index) => (
                        <Marker Marker
                            key={`marker-${index}`}
                            longitude={propertie.coordinates?.lng}
                            latitude={propertie.coordinates?.lat}
                            anchor="bottom"
                        >
                            <p className="bg-green-500 h-8 w-8 rounded-full flex items-center justify-center text-white text-xl"><ImHome3 /></p>
                        </Marker>   
                    ))}
                </Map>
            </div>
        </div >
    )
}
export default Mapbox;