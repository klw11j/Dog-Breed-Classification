var map = L.map('map').setView([28, -84], 7);

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 14,
  minZoom: 3,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  zoomControl: false, 
  accessToken: API_KEY
}).addTo(map);

var shelter1 = L.marker([28.488800, -81.426758]).addTo(map);
shelter1.bindPopup("Orange County Animal Services")

var shelter2 = L.marker([28.570840, -81.287570]).addTo(map);
shelter2.bindPopup("Happy Tails Animal Rescue")

var shelter3 = L.marker([28.489180, -81.426850]).addTo(map);
shelter3.bindPopup("Pet Alliance of Greater Orlando")

var shelter4 = L.marker([27.959260, -81.957490]).addTo(map);
shelter4.bindPopup("SPCA Florida Adoption Center")

var shelter5 = L.marker([28.39793, -80.70556]).addTo(map);
shelter5.bindPopup("Brevard Humane Society")

var shelter6 = L.marker([28.75660, -81.73622]).addTo(map);
shelter6.bindPopup("Lake County Animal Shelter")