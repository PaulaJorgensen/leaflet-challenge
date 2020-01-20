var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
console.log(queryUrl)

// Perform a GET request to the query URL and send the data.features object to the 
//createFeatures function
d3.json(queryUrl, function(data) {
    createFeatures(data.features);
  });

  
  function createFeatures(earthquakeData) {
  
    // Define streetmap, darkmap and satellite layers
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

    var satellitemap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.satellite",
    accessToken: "pk.eyJ1IjoicGF1bGFqb3JnZW5zZW4iLCJhIjoiY2s1ZWkzOWJsMjFnMTNlcGxhMnFiZXZ4cSJ9.jzCx4KKs__M51tqMFQZrHA"
  });
  
  //Create Array to hold cirles 
  var myCircleList = []; 

    //loop through circles array and create a marker foe each earthquake object
    for (var i = 0; i < earthquakeData.length; i++) {

        coordinates = [earthquakeData[i].geometry.coordinates[1],earthquakeData[i].geometry.coordinates[0]]
        properties = earthquakeData[i].properties;

        var color = "#FFFF99";
        if (properties.mag <1) {
          color = "#FFCC00";
        }
        else if (properties.mag <2){
          color = "#99FF99"
        }
        else if (properties.mag <3){
          color = "#009900"
        }
        else if (properties.mag <4){
          color = "#FF9966"
        }
        else if (properties.mag <5){
          color = "#CC3300"
        }
        
        //Add circles to map
        var myCircle = L.circle(coordinates, {
            fillOpacity: 0.75,
            color: color,
            fillColor: color,
            radius: (properties.mag * 20000)
        }).bindPopup("<h3>" + properties.place + "</h3> <hr> <p>Magnitude: " 
        + properties.mag + "</p>" + "<p>  Date: "  + new Date(properties.time) + "</p>");
        myCircleList.push(myCircle);
    }
    
    //create layers for earthquake circles and faultline (tectonic plates)
    var earthquakes = L.layerGroup(myCircleList);
    
    var faultline = new L.LayerGroup();

    // Define a baseMaps object to hold base layers
    var baseMaps = {
      "Street Map": streetmap,
      "Dark Map": darkmap,
      "Satallite Map": satellitemap
    };
  
    // Create overlay object to hold overlay layer
    var overlayMaps = {
      Earthquakes: earthquakes,
      Faultlines: faultline
    };
  
    // Create map, giving it the streetmap, earthquakes, and faultline layers to display on load
    var myMap = L.map("map", {
      center: [
        37.09, -95.71
      ],
      zoom: 5,
      layers: [streetmap, earthquakes,faultline]
    });
  
    // Create a layer control
    // Pass in our baseMaps and overlayMaps
    // Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap);

  // Create legend for earthquake circles  
  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function () {

    var div = L.DomUtil.create('div', 'info legend');
      var magColor = [0, 1, 2, 3, 4, 5];
     var colors = ["#FFFF99", "#FFCC00","#99FF99", "#009900", "#FF9966", "#CC3300"];

    // loop through magnitudes and create a label with a colored square for each
    for (var i = 0; i < magColor.length; i++) {
      div.innerHTML +=
        "<i style='background: " + colors[i]  + "'></i> " +
          magColor[i] + (magColor[i + 1] ? '&ndash;' + magColor[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(myMap);

// Get Tectonic Plate geoJSON data
var faultlineUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";
d3.json(faultlineUrl, function(data) {
  L.geoJSON(data, {
    style: function() {
      return {color: "red", weight: 2, fillOpacity: 0}
    }
  }).addTo(faultline)
})
tectonicplates.addTo(map);
  }