import React from "react";
import 'mapbox-gl/dist/mapbox-gl.css'
import { ImHome3 } from 'react-icons/im';
import Map, {
    Marker,
    FullscreenControl,
    ScaleControl,
    GeolocateControl
} from 'react-map-gl';
const TOKEN = process.env.REACT_APP_MAP_TOKEN;
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
                    mapStyle="mapbox://styles/mapbox/streets-v8"
                    mapboxAccessToken={TOKEN}
                >
                    <GeolocateControl position="top-left" />
                    <FullscreenControl position="top-left" />
                    <ScaleControl />

                    {properties.map((propertie, index) => (
                        <Marker
                            key={index}
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