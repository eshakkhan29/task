import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { ImHome3 } from "react-icons/im";
import { IoIosCloseCircle } from "react-icons/io";
import Map, {
  Marker,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import Pop from "./Pop";
import { useDispatch } from "react-redux";
import { addPopupData } from "../redux/slice/PopupSlice";
const Mapbox = ({ properties }) => {
  const TOKEN = "pk.eyJ1IjoieWVhc2lyMTEiLCJhIjoiY2w5b2kzaHNlMGoxNTNwbzY2MHdnbjB4NCJ9.mRL-d3PWB08xzEMDnOWUog";
  console.log(TOKEN);
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="map-height lg:h-full w-full lg:px-5">
      <div className="h-full w-full overflow-hidden rounded-3xl">
        <Map
          initialViewState={{
            latitude: 40,
            longitude: -100,
            zoom: 1,
            bearing: 0,
            pitch: 0,
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
              <p
                onClick={() => {
                  dispatch(addPopupData(propertie));
                  setShowPopup(true);
                }}
                className="bg-green-500 h-8 w-8 rounded-full flex items-center justify-center text-white text-xl cursor-pointer"
              >
                <ImHome3 />
              </p>
            </Marker>
          ))}
          {showPopup && (
            <div className="lg:mx-0 mx-5 absolute opacity-90 lg:top-10 lg:left-10 bg-[#ededed82] rounded-3xl p-4">
              <p onClick={()=>setShowPopup(false)} className="text-gray-600 font-bold flex justify-end px-2 pb-2 text-3xl cursor-pointer">
                <IoIosCloseCircle/>
              </p>
              <div>
                <Pop />
              </div>
            </div>
          )}
        </Map>
      </div>
    </div>
  );
};
export default Mapbox;
