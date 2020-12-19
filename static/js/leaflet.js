var map = L.map('map').setView([28, -84], 7);

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 17,
  minZoom: 3,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  zoomControl: false, 
  accessToken: API_KEY
}).addTo(map);

var shelter1 = L.marker([28.488800, -81.426758]).addTo(map);
shelter1.bindPopup('<a href="http://www.orangecountyanimalservicesfl.net">Orange County Animal Services</a>' + "<br> 2769 Conroy Road, Orlando, FL 32839 <br>" + "407-836-3111 <br>")

var shelter2 = L.marker([28.570840, -81.287570]).addTo(map);
shelter2.bindPopup('<a href="https://happytrailsanimalrescue.com">Happy Trails Animal Rescue</a>' + "<br> 1720 N Goldenrod Road #8, Orlando, FL 32807 <br>" + "407-270-7074 <br>")

var shelter3 = L.marker([28.489180, -81.426850]).addTo(map);
shelter3.bindPopup('<a href="https://petallianceorlando.org">Pet Alliance of Greater Orlando</a>' + "<br> 2727 Conroy Road, Orlando, FL 32839 <br>" + "407-351-7722 <br>")

var shelter4 = L.marker([27.959260, -81.957490]).addTo(map);
shelter4.bindPopup('<a href="https://www.spcaflorida.org">SPCA Florida Adoption Center</a>' + "<br> 5850 Brannen Road South, Lakeland, FL 33813 <br>" + "863-646-7722 <br>")

var shelter5 = L.marker([28.39793, -80.70556]).addTo(map);
shelter5.bindPopup('<a href="https://brevardhumanesociety.org/">Brevard Humane Society</a>' + "<br> 155 Pioneer Road, Merritt Island, FL 32953 <br>" + "321-636-3343 <br>")

var shelter6 = L.marker([28.75660, -81.73622]).addTo(map);
shelter6.bindPopup('<a href="https://lakecountyfl.gov/offices/animal_services/>Lake County Animal Shelter</a>' + "<br> 28123 County Rd 561, Tavares, FL 32778 <br>" + "352-343-9688 <br>")