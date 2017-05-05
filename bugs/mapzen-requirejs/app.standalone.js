/*globals define, requirejs, console*/
define(
  [
    'https://unpkg.com/leaflet@1.0.3/dist/leaflet.js',
    'https://mapzen.com/js/mapzen.standalone.min.js',
  ],
  function(L, LM) {
    'use strict';
    console.log(L, LM);
    // doesn't matter that I don't have a key since it will fail before with
    // Tangram is not defined
    L.Mapzen.apiKey = 'your-mapzen-api-key';
    var map = L.Mapzen.map('map');
    map.setView([37.7749, -122.4194], 12);
  }
);
