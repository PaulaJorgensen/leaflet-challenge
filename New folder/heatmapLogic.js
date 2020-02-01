var myMap = L.map("map", {
    center: [38.2700, -100.8603],
    zoom: 8
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 4,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1IjoicGF1bGFqb3JnZW5zZW4iLCJhIjoiY2s1ZWkzOWJsMjFnMTNlcGxhMnFiZXZ4cSJ9.jzCx4KKs__M51tqMFQZrHA"
}).addTo(myMap);

var geoData= "resources/data/MassShootingsMapPoints.geojson";

var geojson;

d3.json(geoData, function(response) {
    // console.log(response);
    // console.log(response.length);
    var heatArray = [];

    for (var i = 0; i < 167; i++) {
        var location = response.features[i].geometry.coordinates;
        // console.log(location);
        if (location) {
            // console.log(location)
            heatArray.push([location[1],location[0]]);
            
        }
    }
    console.log(heatArray);
    var heat = L.heatLayer(heatArray, {
        radius:15,
        blur:35
    }).addTo(myMap);
});