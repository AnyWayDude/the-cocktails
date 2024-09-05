import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const ModalMap = () => (
  <APIProvider apiKey={API_KEY}>
    <Map
      style={{ width: "100%", height: "30vh" }}
      defaultCenter={{ lat: 51.202403, lng: 4.448333 }}
      defaultZoom={11}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
    >
      <Marker position={{ lat: 51.20231579781376, lng: 4.448420685904553 }} />
      <Marker title={'Desserts'} position={{ lat: 51.220805135354055, lng: 4.471432201680885 }} />
    </Map>
  </APIProvider>
);

export default ModalMap;
