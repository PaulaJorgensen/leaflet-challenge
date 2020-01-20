var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
console.log(queryUrl)

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
    // Once we get a response, send the data.features object to the createFeatures function
    createFeatures(data.features);
  });
  
  function createFeatures(earthquakeData) {
  
    // Define streetmap and darkmap layers
    var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken: "pk.eyJ1IjoicGF1bGFqb3JnZW5zZW4iLCJhIjoiY2s1ZWkzOWJsMjFnMTNlcGxhMnFiZXZ4cSJ9.jzCx4KKs__M51tqMFQZrHA"
    });
  
    var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.dark",
      accessToken: "pk.eyJ1IjoicGF1bGFqb3JnZW5zZW4iLCJhIjoiY2s1ZWkzOWJsMjFnMTNlcGxhMnFiZXZ4cSJ9.jzCx4KKs__M51tqMFQZrHA"
    });
  
    var myCircleList = []; 

    for (var i = 0; i < earthquakeData.length; i++) {

        coordinates = [earthquakeData[i].geometry.coordinates[1],earthquakeData[i].geometry.coordinates[0]]
        properties = earthquakeData[i].properties;

        var color = "magenta";
        if (properties.mag <1) {
          color = "#blue";
        }
        else if (properties.mag <2){
          color = "green"
        }
        else if (properties.mag <3){
          color = "yellow"
        }
        else if (properties.mag <4){
          color = "orange"
        }
        else if (properties.mag <5){
          color = "red"
        }
        

        var myCircle = L.circle(coordinates, {
            fillOpacity: 0.50,
            color: color,
            fillColor: color,
            radius: (properties.mag * 20000)
        }).bindPopup("<h3>" + properties.place + "</h3> <hr> <p>Magnitude: " 
        + properties.mag + "</p>" + "<p>  Date: "  + new Date(properties.time) + "</p>");
        myCircleList.push(myCircle);
    }
    var earthquakes = L.layerGroup(myCircleList);

    // Define a baseMaps object to hold our base layers
    var baseMaps = {
      "Street Map": streetmap,
      "Dark Map": darkmap
    };
  
    // Create overlay object to hold our overlay layer
    var overlayMaps = {
      Earthquakes: earthquakes
    };
  
    // Create our map, giving it the streetmap and earthquakes layers to display on load
    var myMap = L.map("map", {
      center: [
        37.09, -95.71
      ],
      zoom: 5,
      layers: [streetmap, earthquakes]
    });
  
    // Create a layer control
    // Pass in our baseMaps and overlayMaps
    // Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap);
  }
