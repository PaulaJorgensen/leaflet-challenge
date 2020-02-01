// Create a map object
var myMap = L.map("map", {
  // center: [37.09, -95.71],
  center: [45.8, -124.1637],
  zoom: 3
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1IjoicGF1bGFqb3JnZW5zZW4iLCJhIjoiY2s1ZWkzOWJsMjFnMTNlcGxhMnFiZXZ4cSJ9.jzCx4KKs__M51tqMFQZrHA"
}).addTo(myMap);

// An array containing each city's name, location, involved in incident, and fatalities
var cities = [{
  location: [30.292424, -97.73856],
  name: "Autsin, TX",
  fatality: "15"
},
{
  location: [33.4152, -111.8315],
  name: "Mesa, AZ",
  fatality: "5"
},
{
  location: [41.146432,	-77.42658],
  name: "Lockhaven, PA",
  fatality: "6"
},
{
  location: [46.4547,	-90.1710],
  name: "Ironwood, MI",
  fatality: "7"
},
{
  location: [40.261839,	-76.88279],
  name: "Harrisburg, PA",
  fatality: "4"
},
{
  location: [42.614852,	-73.970812],
  name: "Albany, NY",
  fatality: "4"
},
{
  location: [35.844753,	-78.63263],
  name: "Raliegh, NC",
  fatality: "4"
},
{
  location: [39.908613,	-74.99951],
  name: "Cherry Hill, NJ",
  fatality: "6"
},
{
  location: [30.016002,	-90.01972],
  name: "New Orleans, LA",
  fatality: "7"
},
{
  location: [41.949739,	-124.15098],
  name: "Smith River, CA",
  fatality: "5"
},
{
  location: [33.878981,	-117.89325],
  name: "Fullerton, CA",
  fatality: "7"
},
{
  location: [40.897783,	-73.77933],
  name: "New Rochelle, NY",
  fatality: "5"
},
{
  location: [42.169323,	-121.70298],
  name: "Klamath Falls, OR",
  fatality: "6"
},
{
  location: [40.861748,	-74.83054],
  name: "Hackettstown, NJ",
  fatality: "6"
},
{
  location: [41.705478,	-71.45119],
  name: "Warwick, RI",
  fatality: "5"
},
{
  location: [31.901737,	-106.41827],
  name: "El Paso, TX",
  fatality: "5"
},
{
  location: [33.02583,	-94.72481],
  name: "Daingerfield, TX",
  fatality: "5"
},
{
  location: [40.500665,	-80.18464],
  name: "Coraopolis, PA",
  fatality: "4"
},
{
  location: [44.926644,	-122.98694],
  name: "Salem, OR",
  fatality: "4"
},
{
  location: [37.611434,	-82.72503],
  name: "Allen, KY",
  fatality: "5"
},
{
  location: [61.203953,	-149.8144],
  name: "Anchorage, AK",
  fatality: "4"
},
{
  location: [32.759922,	-97.01216],
  name: "Grand Prairie, TX",
  fatality: "6"
},
{
  location: [25.812625,	-80.2369],
  name: "Miami, FL",
  fatality: "8"
},
{
  location: [40.786387,	-73.97709],
  name: "Manhattan, NY",
  fatality: "4"
},
{
  location: [61.555701,	-144.14233],
  name: "McCarthy, AK",
  fatality: "6"
},
{
  location: [30.655348,	-96.34056],
  name: "College Station, TX",
  fatality: "6"
},
{
  location: [33.721107,	-86.17492],
  name: "Manley Hot Springs, AK",
  fatality: "8"
},
{
  location: [31.105786,	-95.138794],
  name: "Dallas, TX",
  fatality: "6"
},
{
  location: [32.556264,	-117.05057],
  name: "San Ysidro, CA",
  fatality: "21"
},
{
  location: [34.506487,	-93.01941],
  name: "Hot Springs, AR",
  fatality: "5"
},
{
  location: [40.024138,	-79.58414],
  name: "South Connellsville, PA",
  fatality: "4"
},
{
  location: [35.683768,	-97.44686],
  name: "Edmond, OK",
  fatality: "14"
},
{
  location: [28.031689,	-80.60014],
  name: "Palm Bay, FL",
  fatality: "6"
},
{
  location: [37.406289,	-122.00838],
  name: "Sunnyvale, CA",
  fatality: "7"
},
{
  location: [36.039398,	-80.26171],
  name: "Winston-Salem, NC",
  fatality: "4"
},
{
  location: [41.850532,	-87.6699],
  name: "Chicago, IL",
  fatality: "4"
},
{
  location: [37.974273,	-121.3147],
  name: "Stockton, CA",
  fatality: "5"
},
{
  location: [38.252854,	-85.75137],
  name: "Louisville, KY",
  fatality: "9"
},
{
  location: [30.206922,	-81.54604],
  name: "Jacksonville, FL",
  fatality: "11"
},
{
  location: [40.983997,	-74.11438],
  name: "Ridgewood, NJ",
  fatality: "4"
},
{
  location: [31.117874,	-97.72924],
  name: "Killeen, TX",
  fatality: "23"
},
{
  location: [41.662116,	-91.54143],
  name: "Iowa City, IA",
  fatality: "5"
},
{
  location: [37.773923,	-84.85812],
  name: "Harrodsburg, KY",
  fatality: "4"
},
{
  location: [42.660091,	-83.3863],
  name: "Royal Oak, MI",
  fatality: "4"
},
{
  location: [33.466393,	-112.0008],
  name: "Phoenix, AZ",
  fatality: "4"
},
{
  location: [39.089929,	-121.55053],
  name: "Olivehurst, CA",
  fatality: "4"
},
{
  location: [42.374828,	-76.91606],
  name: "Watkins Glen, NY",
  fatality: "4"
},
{
  location: [35.640589,	-120.70418],
  name: "Morro Bay, CA",
  fatality: "6"
},
{
  location: [37.798228,	-122.40027],
  name: "San Francisco, CA",
  fatality: "8"
},
{
  location: [35.084163,	-78.953],
  name: "Fayetteville, NC",
  fatality: "4"
},
{
  location: [32.7991,	-116.97334],
  name: "El Cajon, CA",
  fatality: "4"
},
{
  location: [34.268736,	-119.2249],
  name: "Oxnard, CA",
  fatality: "4"
},
{
  location: [40.742901,	-73.67895],
  name: "Nassau County, NY",
  fatality: "6"
},
{
  location: [39.665637,	-104.83421],
  name: "Aurora, CO",
  fatality: "4"
},
{
  location: [47.595572,	-117.67344],
  name: "Spokane, WA",
  fatality: "4"
},
{
  location: [34.992085,	-79.23013],
  name: "Raeford, NC",
  fatality: "5"
},
{
  location: [27.846568,	-97.59435],
  name: "Corpus Christi, TX",
  fatality: "5"
},
{
  location: [34.061611,	-118.23944],
  name: "Los Angeles, CA",
  fatality: "4"
},
{
  location: [40.842173,	-73.85862],
  name: "Bronx, NY",
  fatality: "5"
},
{
  location: [26.121114,	-80.13187],
  name: "Fort Lauerdale, FL",
  fatality: "5"
},
{
  location: [32.292396,	-90.18328],
  name: "Jackson, MS",
  fatality: "5"
},
{
  location: [44.893888,	-71.44766],
  name: "Colebrook, NH",
  fatality: "4"
},
{
  location: [33.569885,	-81.71368],
  name: "Aiken, SC",
  fatality: "4"
},
{
  location: [27.894991,	-81.82638],
  name: "Bartow, FL",
  fatality: "4"
},
{
  location: [33.8318,	-117.84739],
  name: "Orange, CA",
  fatality: "4"
},
{
  location: [41.660949,	-72.66098],
  name: "Newington, CT",
  fatality: "4"
},
{
  location: [35.781707,	-90.74506],
  name: "Jonesboro, AR",
  fatality: "5"
},
{
  location: [44.070824,	-122.90709],
  name: "Springfield, OR",
  fatality: "4"
},
{
  location: [30.229237,	-90.92251],
  name: "Gonzales, LA",
  fatality: "4"
},
{
  location: [39.616114,	-105.07393],
  name: "Columbine, CO",
  fatality: "13"
},
{
  location: [36.088922,	-115.13905],
  name: "Las Vegas, NV",
  fatality: "4"
},
{
  location: [33.830054,	-84.38472],
  name: "Atlanta, GA",
  fatality: "12"
},
{
  location: [32.655401,	-97.37765],
  name: "Fort Worth, TX",
  fatality: "7"
},
{
  location: [21.313033,	-157.85615],
  name: "Honolulu, HI",
  fatality: "7"
},
{
  location: [27.963798,	-82.49537],
  name: "Tampa, FL",
  fatality: "5"
},
{
  location: [32.846645,	-96.96733],
  name: "Irving, TX",
  fatality: "5"
},
{
  location: [40.436618,	-80.07289],
  name: "Mount Lebanon, PA",
  fatality: "5"
},
{
  location: [42.501345,	-71.07132],
  name: "Wakefield, MA",
  fatality: "7"
},
{
  location: [29.70053,	-95.53514],
  name: "Houston, TX",
  fatality: "4"
},
{
  location: [41.789079,	-88.08536],
  name: "Melrose Park, IL",
  fatality: "4"
},
{
  location: [39.603225,	-107.89755],
  name: "Rifle, CO",
  fatality: "4"
},
{
  location: [38.556576,	-121.49285],
  name: "Sacramento, CA",
  fatality: "5"
},
{
  location: [41.700776,	-86.30357],
  name: "South Bend, IN",
  fatality: "4"
},
{
  location: [34.711291,	-86.61691],
  name: "Huntsville, AL",
  fatality: "4"
},
{
  location: [32.339004,	-88.6596],
  name: "Meridian, MS",
  fatality: "6"
},
{
  location: [41.814283,	-87.65282],
  name: "Chicago, IL",
  fatality: "8"
},
{
  location: [48.168577,	-117.02483],
  name: "Oldtown, ID",
  fatality: "4"
},
{
  location: [39.066732,	-94.68872],
  name: "Kansas City, KS",
  fatality: "6"
},
{
  location: [45.661506,	-91.54526],
  name: "Birchwood, WI",
  fatality: "6"
},
{
  location: [40.085313,	-82.97326],
  name: "Columbus, OH",
  fatality: "4"
},
{
  location: [33.752856,	-84.39013],
  name: "Atlanta, GA",
  fatality: "4"
},
{
  location: [43.060872,	-88.09478],
  name: "Brookfield, WI",
  fatality: "6"
},
{
  location: [47.871135,	-95.14362],
  name: "Red Lake, MN",
  fatality: "9"
},
{
  location: [33.589851,	-95.90242],
  name: "Sash, TX",
  fatality: "4"
},
{
  location: [34.262834,	-119.848555],
  name: "Goleta, CA",
  fatality: "7"
},
{
  location: [47.629653,	-122.29752],
  name: "Seattle, WA",
  fatality: "6"
},
{
  location: [30.44495,	-91.13806],
  name: "Baton Rouge, LA",
  fatality: "5"
},
{
  location: [39.981916,	-76.09224],
  name: "Bart Township, PA",
  fatality: "5"
},
{
  location: [40.759246,	-111.86371],
  name: "Salt Lake City, UT",
  fatality: "5"
},
{
  location: [37.179115,	-80.351482],
  name: "Blacksburg, VA",
  fatality: "32"
},
{
  location: [41.264531,	-96.04798],
  name: "Omaha, NE",
  fatality: "8"
},
{
  location: [39.81431,	-105.12263],
  name: "Arvada, CO",
  fatality: "4"
},
{
  location: [38.582702,	-90.40966],
  name: "Kirkwood, MO",
  fatality: "6"
},
{
  location: [41.924127,	-88.74617],
  name: "DeKalb, IL",
  fatality: "5"
},
{
  location: [34.956344,	-120.45243],
  name: "Santa Maria, CA",
  fatality: "4"
},
{
  location: [37.825094,	-87.56055],
  name: "Henderson, KY",
  fatality: "5"
},
{
  location: [48.518653,	-122.16545],
  name: "Alger, WA",
  fatality: "6"
},
{
  location: [35.319639,	-79.40248],
  name: "Carthage, NC",
  fatality: "8"
},
{
  location: [42.121443,	-75.93329],
  name: "Binghamton, NY",
  fatality: "13"
},
{
  location: [36.49376,	-80.62336],
  name: "Mt. Airy, NC",
  fatality: "4"
},
{
  location: [31.148447,	-97.80918],
  name: "Killeen, TX",
  fatality: "13"
},
{
  location: [47.153571,	-122.4485],
  name: "Parkland, WA",
  fatality: "4"
},
{
  location: [34.152476,	-118.36841],
  name: "Los Angeles, CA",
  fatality: "4"
},
{
  location: [25.860373,	-80.27174],
  name: "Hialeah, FL",
  fatality: "4"
},
{
  location: [41.778888,	-72.52384],
  name: "Manchester, CT",
  fatality: "8"
},
{
  location: [42.886357,	-78.8779],
  name: "Buffalo, NY",
  fatality: "4"
},
{
  location: [37.533559,	-83.34547],
  name: "Jackson, KY",
  fatality: "5"
},
{
  location: [32.32764,	-110.98801],
  name: "Tucson, AR",
  fatality: "6"
},
{
  location: [41.046055,	-81.49039],
  name: "Copley Township, OH",
  fatality: "7"
},
{
  location: [39.147877,	-119.74536],
  name: "Carson City, NV",
  fatality: "4"
},
{
  location: [33.759283,	-118.08239],
  name: "Seal Beach, CA",
  fatality: "8"
},
{
  location: [37.812377,	-122.24199],
  name: "Oakland, CA",
  fatality: "7"
},
{
  location: [47.66377,	-122.30118],
  name: "Seattle, WA",
  fatality: "5"
},
{
  location: [39.698387,	-104.83956],
  name: "Aurora, CO",
  fatality: "12"
},
{
  location: [42.884347,	-87.8992],
  name: "Oak Creek, WI",
  fatality: "6"
},
{
  location: [44.971798,	-93.30273],
  name: "Minneapolis, MN",
  fatality: "6"
},
{
  location: [41.411536,	-73.24888],
  name: "Newtown, CT",
  fatality: "27"
},
{
  location: [43.038149,	-74.9846],
  name: "Herkimer, NY",
  fatality: "4"
},
{
  location: [47.311072,	-122.31188],
  name: "Federal Way, WA",
  fatality: "4"
},
{
  location: [33.992411,	-118.46531],
  name: "Santa Monica, CA",
  fatality: "5"
},
{
  location: [25.864773,	-80.30069],
  name: "Hialeah, FL",
  fatality: "6"
},
{
  location: [38.881762,	-76.99447],
  name: "Washington, DC",
  fatality: "12"
},
{
  location: [41.439363,	-120.58771],
  name: "Alturas, CA",
  fatality: "4"
},
{
  location: [34.443746,	-119.94215],
  name: "Isla Vista, CA",
  fatality: "6"
},
{
  location: [48.093129,	-122.21614],
  name: "Marysville, WA",
  fatality: "4"
},
{
  location: [32.779126,	-79.9355],
  name: "Charleston, SC",
  fatality: "9"
},
{
  location: [35.065723,	-85.25014],
  name: "Chattanooga, TN",
  fatality: "5"
},
{
  location: [43.227287,	-123.35138],
  name: "Roseburg, OR",
  fatality: "9"
},
{
  location: [31.829314,	-95.86383],
  name: "Tennessee Colony, TX",
  fatality: "6"
},
{
  location: [34.080662,	-117.27357],
  name: "San Bernardino, CA",
  fatality: "14"
},
{
  location: [42.272538,	-85.69255],
  name: "Kalamazoo, MI",
  fatality: "6"
},
{
  location: [40.438035,	-79.87191],
  name: "Wilkinsburg, PA",
  fatality: "5"
},
{
  location: [28.51483,	-81.36054],
  name: "Orlando, FL",
  fatality: "49"
},
{
  location: [32.77988,	-96.80502],
  name: "Dallas, TX",
  fatality: "5"
},
{
  location: [48.486892,	-122.33366],
  name: "Burlington, WA",
  fatality: "5"
},
{
  location: [26.094385,	-80.15422],
  name: "Fort Lauderdale, FL",
  fatality: "5"
},
{
  location: [32.855811,	-90.4497],
  name: "Yazoo City, MS",
  fatality: "4"
},
{
  location: [44.885168,	-89.61922],
  name: "Rothschild, WI",
  fatality: "4"
},
{
  location: [28.546897,	-81.30774],
  name: "Orlando, FL",
  fatality: "5"
},
{
  location: [36.088922,	-115.13905],
  name: "Las Vegas, NV",
  fatality: "58"
},
{
  location: [29.273819,	-98.05424],
  name: "Sutherland Springs, TX",
  fatality: "25"
},
{
  location: [39.918271,	-122.21393],
  name: "Rancho Tehama Reserve, CA",
  fatality: "5"
},
{
  location: [40.061931,	-79.38538],
  name: "Saltlick Township, PA",
  fatality: "4"
},
{
  location: [26.30116,	-80.2731],
  name: "Parkland, FL",
  fatality: "17"
},
{
  location: [42.396736,	-83.14152],
  name: "Detroit, MI",
  fatality: "4"
},
{
  location: [36.1627,	-86.7816],
  name: "Nashville, TN",
  fatality: "4"
},
{
  location: [29.382307,	-95.12768],
  name: "Sante Fe, TX",
  fatality: "10"
},
{
  location: [38.997511,	-76.49803],
  name: "Annapolis, MD",
  fatality: "5"
},
{
  location: [35.324767,	-118.96329],
  name: "Bakersfield, CA",
  fatality: "5"
},
{
  location: [40.430919,	-79.92569],
  name: "Pittsburgh, PA",
  fatality: "11"
},
{
  location: [34.14348,	-118.85608],
  name: "Thousand Oaks, CA",
  fatality: "12"
},
{
  location: [27.483817,	-81.42131],
  name: "Sebring, FL",
  fatality: "5"
},
{
  location: [41.766029,	-88.35254],
  name: "Aurora, IL",
  fatality: "5"
},
{
  location: [36.762459,	-76.06139],
  name: "Virgina Beach, VA",
  fatality: "12"
},
{
  location: [31.782408,	-106.36353],
  name: "El Paso, TX",
  fatality: "22"
},
{
  location: [39.757758,	-84.18848],
  name: "Dayton, OH",
  fatality: "9"
},
{
  location: [31.746572,	-102.566993],
  name: "Odessa, TX",
  fatality: "7"
},


];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Fatalities: " + city.fatality + "</h3>")
    .addTo(myMap);
}
