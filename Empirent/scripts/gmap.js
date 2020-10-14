"use strict";

// Initialize and add the map
function initMap() {
    var styledMapType = new google.maps.StyledMapType(
        [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#dbe8ec"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ],
        { name: 'Styled Map' });
    // The location of Prague
    var prague = { lat: 50.073469, lng: 14.438150 };
    // The map, centered at Prague
    var map = new google.maps.Map(document.getElementById('gmap'), {
        zoom: 12,
        center: prague
    });
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    var apartments = [
        { position: new google.maps.LatLng(50.07, 14.4) },
        { position: new google.maps.LatLng(50.11, 14.42) },
        { position: new google.maps.LatLng(50.073, 14.37) },
        { position: new google.maps.LatLng(50.078, 14.34) },
        { position: new google.maps.LatLng(50.08, 14.38) },
        { position: new google.maps.LatLng(50.07, 14.46) },
        { position: new google.maps.LatLng(50.06, 14.415) },
        { position: new google.maps.LatLng(50.05, 14.4) },
        { position: new google.maps.LatLng(50.09, 14.48) },
        { position: new google.maps.LatLng(50.08, 14.42) },
        { position: new google.maps.LatLng(50.13, 14.45) },
        { position: new google.maps.LatLng(50.12, 14.44) }
    ];
    var latlngbounds = new google.maps.LatLngBounds();
    for (var i = 0; i < apartments.length; i++) {
        latlngbounds.extend(apartments[i].position);
    }
    map.fitBounds(latlngbounds);
    var image = {
        url: 'assets/imgs/dot.svg',
        size: new google.maps.Size(66, 66),
        anchor: new google.maps.Point(33, 33)
    }
    var contentString =
        '<div class="infowindow-content">' +
        '  <div class="apartment-image">' +
        '    <div class="price" style="width: 150px">' +
        '      <p class="starting-from">STARTING FROM</p>' +
        '      <p class="money"><span style="font-weight: bold">600 €<span style="font-size: 20px">/</span></span><span style="font-size: 14px">month</span>' +
        '      </p>' +
        '    </div>' +
        '    <div class="long-term" style="margin-top: 62%; margin-bottom: 3%">' +
        '       <p style="font-weight: bold; display: inline;">LONG TERM </p>' +
        '       <img src="images/favorite.png" class="imgClickAndChange heartx" onclick="changeImage(this)" style="width: 25px; right: 40px">' +
        '    </div>' +
        '  </div>' +
        '  <div class="infowindow-text">' +
        '    <div class="apartment-title">' +
        '      1 Bedroom Apartment - Aquarius' +
        '    </div>' +
        '    <div class="address" style="font-weight: bold">RYBNÁ 15, PRAHA 1, STARÉ MĚSTO</div>' +
        '    <div class="apartment-text">' +
        '      <br>Comfortable one-bedroom accommodation in the center of Prague, ideal for up to 4 persons.' +
        '    </div>' +
        '    <div class="row">' +
        '      <div class="col-8 learn-more-button"></div>' +
        '    </div>' +
        '  </div>' +
        '</div>';
    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 500,
        pixelOffset: new google.maps.Size(0, 0)
    });
    var markers = [];
    for (var i = 0; i < apartments.length; i++) {
        var marker = new google.maps.Marker({
            position: apartments[i].position,
            icon: image,
            map: map
        });
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.open(map, marker);
            }
        })(marker, i))
    }

}

