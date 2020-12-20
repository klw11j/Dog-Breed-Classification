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

var shelter3 = L.marker([30.28763, -81.57198]).addTo(map);
shelter3.bindPopup('<a href="https://www.jaxhumane.org">Jacksonville Humane Society</a> <br>' + "<br> 8464 Beach Blvd., Jacksonville, FL 32216 <br>" + "(904) 725-8766 <br>")

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

var shelter11 = L.marker([26.97459, -82.04199]).addTo(map);
shelter11.bindPopup('<a href="https://www.awlshelter.org/">Animal Welfare League</a> <br>' + "<br> 3519 Drance Street, Port Charlotte, FL 33980 <br>" + "(941) 625-6720 <br>")

var shelter11 = L.marker([28.80401, -82.31668]).addTo(map);
shelter11.bindPopup('<a href="https://www.citrusbocc.com/departments/community_services/animal_services/index.php">Citrus County Animal Services</a> <br>' + "<br> 4030 South Airport Road, Inverness, FL 34450 <br>" + "(352) 746-8400 <br>")

var shelter12 = L.marker([30.14675, -81.75341]).addTo(map);
shelter12.bindPopup('<a href="http://www.clayhumane.org/index.php">Clay County Humane Society</a> <br>' + "<br> 2230 Filmore Street, Orange Park, FL 32065 <br>" + "(904) 276-7729 <br>")

var shelter13 = L.marker([26.15749, -81.76798]).addTo(map);
shelter13.bindPopup('<a href="https://hsnaples.org">Humane Society Naples</a> <br>' + "<br> 370 Airport-Pulling Road North, Naples, FL 34104 <br>" + "(239) 643-1555 <br>")

var shelter14 = L.marker([27.26159, -81.84163]).addTo(map);
shelter14.bindPopup('<a href="https://desotobocc.com/?/departments/animal_control">DeSoto County Animal Services</a> <br>' + "<br> 2048 NE McKay Street, Arcadia, FL 34266 <br>" + "(863) 993-4855 <br>")

var shelter15 = L.marker([30.44783, -87.23090]).addTo(map);
shelter15.bindPopup('<a href="https://myescambia.com/our-services/animal-services/animal-shelter">Escambia County Animal Shelter</a> <br>' + "<br> 200 W Fairfield Drive, Pensacola, FL 32501 <br>" + "(850) 595-3075 <br>")

var shelter16 = L.marker([29.55844, -81.26615]).addTo(map);
shelter16.bindPopup('<a href="https://www.flaglerhumanesociety.org">Flagler Humane Society</a> <br>' + "<br> 1 Shelter Drive, Palm Coast, FL 32137 <br>" + "(386) 445-1814 <br>")

var shelter17 = L.marker([29.77546, -84.83020]).addTo(map);
shelter17.bindPopup('<a href="http://www.forgottenpets.org">Franklin County Humane Society</a> <br>' + "<br> 244 US Highway 65, Eastpoint, FL 32328 <br>" + "(850) 670-8417 <br>")

var shelter18 = L.marker([26.74367, -81.42854]).addTo(map);
shelter18.bindPopup('<a href="https://caloosahumanesociety.org">Caloosa Humane Society</a> <br>' + "<br> 1200 Pratt Blvd., LaBelle, FL 33935 <br>" + "(863) 675-0997 <br>")

var shelter19 = L.marker([26.64126, -81.82630]).addTo(map);
shelter19.bindPopup('<a href="https://www.gulfcoasthumanesociety.org">Gulf Coast Humane Society</a> <br>' + "<br> 2010 Arcadia Street, Fort Myers, FL 33916 <br>" + "(239) 332-0364 <br>")

var shelter20 = L.marker([27.57041, -81.78135]).addTo(map);
shelter20.bindPopup('<a href="https://www.hardeecounty.net/ac.htm">Hardee County Animal Control</a> <br>' + "<br> 685 Airport Road, Wauchula, FL 33873 <br>" + "(863) 773-2320 <br>")

var shelter21 = L.marker([28.53467, -82.42405]).addTo(map);
shelter21.bindPopup('<a href="https://humanerescue.org">Humane Society of the Nature Coast</a> <br>' + "<br> 7200 Mobley Road, Brooksville, FL 34601 <br>" + "(352) 796-2711 <br>")

var shelter22 = L.marker([27.44165, -81.36661]).addTo(map);
shelter21.bindPopup('<a href="http://humanesocietyofhighlandscounty.com">Humane Society of Highlands County</a> <br>' + "<br> 7421 Hayward Taylor Blvd., Sebring, FL 33876 <br>" + "(863) 655-1522 <br>")

var shelter23 = L.marker([27.97274, -82.48406]).addTo(map);
shelter23.bindPopup('<a href="https://humanesocietytampa.org">The Humane Society of Tampa Bay</a> <br>' + "<br> 3607 N Armenia Avenue, Tampa, FL 33607 <br>" + "(813) 876-7138 <br>")

var shelter24 = L.marker([27.73600, -80.45521]).addTo(map);
shelter24.bindPopup('<a href="https://www.hsvb.org">The Humane Society of Vero Beach and Indian River County</a> <br>' + "<br> 6230 77th Street, Vero Beach, FL 32967 <br>" + "(772) 388-3331 <br>")

var shelter25 = L.marker([30.76177, -85.26116]).addTo(map);
shelter25.bindPopup('<a href="https://www.hsvb.org">Partners for Pets</a> <br>' + "<br> 4011 Maintenance Drive, Marianna, FL 32448 <br>" + "(850) 482-4570 <br>")

var shelter26 = L.marker([30.54123, -83.83599]).addTo(map);
shelter26.bindPopup('<a href="http://www.jeffersonhumane.org">Wolf Creek Pet Adoption Center</a> <br>' + "<br> 2123 E Washington, Monticello, FL 32344 <br>" + "(850) 342-0244 <br>")

var shelter27 = L.marker([28.76548, -81.73673]).addTo(map);
shelter27.bindPopup('<a href="https://www.lakecountyfl.gov/offices/animal_services/">Lake County Animal Shelter</a> <br>' + "<br> 12280 County Road 448, Tavares, FL 32778 <br>" + "(352) 343-9688 <br>")

var shelter28 = L.marker([30.45089, -84.21919]).addTo(map);
shelter28.bindPopup('<a href="https://www.talgov.com/animals/animalservices.aspx">Tallahassee Animal Shelter</a> <br>' + "<br> 1125 Easterwood Drive, Tallahassee, FL 32311 <br>" + "(850) 891-2950 <br>")

var shelter29 = L.marker([29.43571, -82.57217]).addTo(map);
shelter29.bindPopup('<a href="https://www.levycounty.org/department/animal_services/index.php">Levy County Animal Services</a> <br>' + "<br> 12055 NE 69th Lane, Bronson, FL 32621 <br>" + "(352) 486-5138 <br>")

var shelter30 = L.marker([30.49400, -86.20466]).addTo(map);
shelter30.bindPopup('<a href="https://alaqua.org">Alaqua Animal Refuge</a> <br>' + "<br> 914 Whitfield Road, Freeport, FL 32439 <br>" + "(850) 880-6399 <br>")

var shelter31 = L.marker([30.39455, -83.30911]).addTo(map);
shelter31.bindPopup('<a href="http://www.suwanneevalleyhumanesociety.us">Suwannee Valley Humane Society</a> <br>' + "<br> 1156 Bisbee Loop, Madison, FL 32340 <br>" + "(850) 971-9904 <br>")

var shelter32 = L.marker([27.47853, -82.57542]).addTo(map);
shelter32.bindPopup('<a href="https://www.humanemanatee.org">Humane Society of Manatee County</a> <br>' + "<br> 2515 14th Street W, Bradenton, FL 34205 <br>" + "(941) 747-5702 <br>")

var shelter33 = L.marker([29.20442, -82.14294]).addTo(map);
shelter33.bindPopup('<a href="http://thehsmc.org">Humane Society of Marion County</a> <br>' + "<br> 701 NW 14th Road, Ocala, FL 34475 <br>" + "(352) 873-7387 <br>")

var shelter34 = L.marker([27.15568, -80.30383]).addTo(map);
shelter34.bindPopup('<a href="https://hstc1.org">Humane Society of the Treasure Coast</a> <br>' + "<br> 4100 SW Leighton Farm Avenue, Palm City, FL 34990 <br>" + "(772) 223-8822 <br>")

var shelter35 = L.marker([25.92556, -80.15533]).addTo(map);
shelter35.bindPopup('<a href="https://www.humanesocietymiami.org">Humane Society of Greater Miami</a> <br>' + "<br> 16101 W Dixie Highway, North Miami Beach, FL 33160 <br>" + "(305) 696-0800 <br>")

var shelter36 = L.marker([24.58128, -81.74594]).addTo(map);
shelter36.bindPopup('<a href="https://fkspca.org">Florida Keys SPCA</a> <br>' + "<br> 5711 College Road, Key West, FL 33040 <br>" + "(305) 294-4857 <br>")

var shelter37 = L.marker([30.61806, -81.46557]).addTo(map);
shelter37.bindPopup('<a href="https://nassauhumane.org">Nassau Humane Society</a> <br>' + "<br> 639 Airport Road, Fernandina Beach, FL 32034 <br>" + "(904) 321-1647 <br>")

var shelter38 = L.marker([30.42487, -86.67229]).addTo(map);
shelter38.bindPopup('<a href="https://www.paws-shelter.org">Panhandle Animal Welfare Society</a> <br>' + "<br> 752 Lovejoy Road NW, Fort Walton Beach, FL 32548 <br>" + "(850) 243-1525 <br>")

var shelter39 = L.marker([27.25428, -80.85435]).addTo(map);
shelter39.bindPopup('<a href="http://trailofhopeanimalrescue.org">Trail of Hope Animal Shelter</a> <br>' + "<br> 1201 US Highway 98 N, Okeechobee, FL 34972 <br>" + "(863) 357-1104 <br>")

var shelter40 = L.marker([28.23651, -81.31864]).addTo(map);
shelter40.bindPopup('<a href="https://www.osceolacountypets.com">Osceola County Animal Services</a> <br>' + "<br> 3910 Old Canoe Creek Road, St. Cloud, FL 34769 <br>" + "(407) 742-8000 <br>")

var shelter41 = L.marker([26.72331, -80.10908]).addTo(map);
shelter41.bindPopup('<a href="https://www.peggyadams.org">Peggy Adams Animal Rescue League</a> <br>' + "<br> 3100/3200 North Military Trail, West Palm Beach, FL 33049 <br>" + "(561) 686-3663 <br>")

var shelter42 = L.marker([28.21770, -82.49020]).addTo(map);
shelter42.bindPopup('<a href="https://www.pascocountyfl.net/408/Animal-Services">Pasco County Animal Services</a> <br>' + "<br> 19640 Dogpatch Lane, Land O'Lakes, FL 34638 <br>" + "(813) 929-1212 <br>")

var shelter43 = L.marker([27.88845, -82.81028]).addTo(map);
shelter43.bindPopup('<a href="http://www.pinellascounty.org/animalservices/">Pinellas County Animal Services</a> <br>' + "<br> 12450 Ulmerton Road, Largo, FL 33774 <br>" + "(727) 582-2600 <br>")

var shelter44 = L.marker([28.02354, -81.68019]).addTo(map);
shelter44.bindPopup('<a href="https://www.humanesocietyofpolkcounty.org">Humane Society of Polk County</a> <br>' + "<br> 3195 Dundee Road, Winter Haven, FL 33884 <br>" + "(863) 324-5227 <br>")

var shelter45 = L.marker([29.86376, -81.28075]).addTo(map);
shelter45.bindPopup('<a href="https://www.safe-pet-rescue-fl.com">S.A.F.E. Pet Rescue, Inc.</a> <br>' + "<br> 1250 County Road A1A, St. Augustine, FL 32080 <br>" + "(904) 460-0556 <br>")

var shelter46 = L.marker([27.36084, -80.41109]).addTo(map);
shelter46.bindPopup('<a href="https://hsslc.org">Humane Society of St. Lucie County</a> <br>' + "<br> 8890 Glades Cut Off Road, Port St. Lucie, FL 34986 <br>" + "(772) 238-5631 <br>")

var shelter47 = L.marker([30.59752, -87.07014]).addTo(map);
shelter47.bindPopup('<a href="https://www.santarosa.fl.gov/387/Animal-Services">Santa Rosa County Animal Services</a> <br>' + "<br> 4451 Pine Forest Road, Milton, FL 32583 <br>" + "(850) 983-4680 <br>")

var shelter48 = L.marker([27.35097, -82.52338]).addTo(map);
shelter48.bindPopup('<a href="https://www.hssc.org">Humane Society of Sarasota County</a> <br>' + "<br> 2331 15th Street, Sarasota, FL 34237 <br>" + "(941) 955-4131 <br>")

var shelter49 = L.marker([28.74800, -81.30054]).addTo(map);
shelter49.bindPopup('<a href="https://www.seminolecountyfl.gov/departments-services/county-managers-office/animal-services/">Seminole County Animal Services</a> <br>' + "<br> 232 Eslinger Way, Sanford, FL 32773 <br>" + "(407) 665-5201 <br>")

var shelter50 = L.marker([28.74324, -82.08710]).addTo(map);
shelter50.bindPopup('<a href="https://yhsspca.org">Your Humane Society SPCA</a> <br>' + "<br> 994 County Road 529A, Lake Panasoffkee, FL 33538 <br>" + "(352) 793-9117 <br>")

var shelter51 = L.marker([30.18581, -82.97751]).addTo(map);
shelter51.bindPopup('<a href="https://suwcounty.org/county/index.php/2012-11-23-08-17-17/animal-services">Suwannee County Animal Services</a> <br>' + "<br> 11150 144th Street, McAlpin, FL 32062 <br>" + "(386) 208-0072 <br>")

var shelter52 = L.marker([30.11358, -83.57973]).addTo(map);
shelter52.bindPopup('<a href="https://www.taylorcountygov.com/departments/animal_control/index.php">Taylor County Animal Services</a> <br>' + "<br> 302 W Maurice Linton Road, Perry, FL 32347 <br>" + "(850) 838-3525 <br>")

var shelter53 = L.marker([29.22044, -81.10598]).addTo(map);
shelter53.bindPopup('<a href="https://www.halifaxhumanesociety.org">Halifax Humane Society</a> <br>' + "<br> 2364 LPGA Blvd., Daytona Beach, FL 32124 <br>" + "(386) 274-4703 <br>")

var shelter54 = L.marker([30.19659, -84.37914]).addTo(map);
shelter54.bindPopup('<a href="https://www.mywakulla.com/departments/fire_and_rescue/departments/animal_control.php">Wakulla County Animal Services</a> <br>' + "<br> 1 Oak Street, Crawfordville, FL 32327 <br>" + "(850) 926-0902 <br>")

var shelter55 = L.marker([30.78478, -86.10867]).addTo(map);
shelter55.bindPopup('<a href="https://waltonso.org/animal-services/">Walton County Animal Services</a> <br>' + "<br> 365 Triple G Road, DeFuniak Springs, FL 32433 <br>" + "(850) 892-8758 <br>")

var shelter56 = L.marker([30.63487, -85.59739]).addTo(map);
shelter56.bindPopup('<a href="https://www.washingtonfl.com/departments/animalcontrol/about/">Washington County Animal Services</a> <br>' + "<br> 2300 Pioneer Road, Chipley, FL 32428 <br>" + "(850) 638-6306 <br>")