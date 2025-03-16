// initialize
var map = L.map('map').setView([51.505, -0.09], 13);

// layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.on("locationfound", function (location) {

    marker = L.userMarker(location.latlng).addTo(map);

    marker.setLatLng(location.latlng);
    marker.setAccuracy(location.accuracy);
});

map.locate({
    watch: false,
    locate: true,
    setView: true,
    enableHighAccuracy: true
});

