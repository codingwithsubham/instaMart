import { saveUserLocation } from '../store/auth/authSlice';
import store from '../store/store';

export const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert('Geolocation is not supported by this browser.');
  }
};

function showPosition(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const myLoc = { lat, lng };
  store.dispatch(saveUserLocation(myLoc));
}

export const drawMap = (myLoc) => {
  const rideMap = document.getElementById('ride-map');
  if(window.google.maps.MapTypeId){
    const mapOptions = {
        center: myLoc,
        zoom: 16,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      };
      if (rideMap) {
        return new window.google.maps.Map(rideMap, mapOptions);
      }
  }
};
