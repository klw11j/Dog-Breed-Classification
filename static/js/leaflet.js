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
shelter1.bindPopup('<a href="http://www.orangecountyanimalservicesfl.net">Orange County Animal Services</a> <br>' + "<br> 2769 Conroy Road, Orlando, FL 32839 <br>" + "(407) 836-3111 <br>")

var shelter2 = L.marker([28.570840, -81.287570]).addTo(map);
shelter2.bindPopup('<a href="https://happytrailsanimalrescue.com">Happy Trails Animal Rescue</a> <br>' + "<br> 1720 N Goldenrod Road #8, Orlando, FL 32807 <br>" + "(407) 270-7074 <br>")

var shelter4 = L.marker([27.959260, -81.957490]).addTo(map);
shelter4.bindPopup('<a href="https://www.spcaflorida.org">SPCA Florida Adoption Center</a> <br>' + "<br> 5850 Brannen Road South, Lakeland, FL 33813 <br>" + "(863) 646-7722 <br>")

var shelter5 = L.marker([28.39793, -80.70556]).addTo(map);
shelter5.bindPopup('<a href="https://brevardhumanesociety.org/">Brevard Humane Society</a> <br>' + "<br> 155 Pioneer Road, Merritt Island, FL 32953 <br>" + "(321) 636-3343 <br>")

var shelter6 = L.marker([29.70437, -82.28168]).addTo(map);
shelter6.bindPopup('<a href="https://alachuacounty.us/Depts/animalServices/Pages/AnimalServices.aspx">Alachua County Animal Services</a> <br>' + "<br> 3400 NE 53rd Avenue, Gainesville, FL 32609 <br>" + "(352) 264-6870 <br>")

var shelter7 = L.marker([30.34321, -82.11362]).addTo(map);
shelter7.bindPopup('<a href="http://www.bakercountyfl.org/animals.php">Baker County Animal Control</a> <br>' + "<br> 14564 Deputy Dawg Lane, Macclenny, FL 32063<br>" + "(904) 259-6786 <br>")

var shelter8 = L.marker([30.17796, -85.64036]).addTo(map);
shelter8.bindPopup('<a href="https://adoptme.org">The Humane Society of Bay County</a> <br>' + "<br> 1600 Bay Avenue, Panama City, FL 32405<br>" + "(850) 215-7120 <br>")

var shelter9 = L.marker([29.96218, -82.17480]).addTo(map);
shelter9.bindPopup('<a href="https://adoptme.org">Bradford County Animal Control</a> <br>' + "<br> 16946 SW 75th Avenue, Starke, FL 32091<br>" + "(904) 964-9200 <br>")

var shelter10 = L.marker([29.96218, -82.17480]).addTo(map);
shelter10.bindPopup('<a href="https://humanebroward.com">Humane Society of Broward County</a> <br>' + "<br> 2070 Griffin Road, Fort Lauderdale, FL 33312 <br>" + "(954) 989-3977 <br>")