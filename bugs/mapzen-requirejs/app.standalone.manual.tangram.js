/*globals define, requirejs, console, window*/
define(
  [
    'https://unpkg.com/leaflet@1.0.3/dist/leaflet.js',
    'https://mapzen.com/tangram/0.12/tangram.min.js',
    'https://mapzen.com/js/mapzen.standalone.min.js',
  ],
  function(L, Tangram, LM) {
    'use strict';
    console.log(L, Tangram, LM);
    // doesn't matter that I don't have a key since it will fail before with
    // Tangram is not defined
    window.L = L;
    window.Tangram = Tangram;
    L.Mapzen.apiKey = 'vector-tiles-LM25tq4';
    var map = L.Mapzen.map('map');
    map.setView([37.7749, -122.4194], 12);
  }
);
