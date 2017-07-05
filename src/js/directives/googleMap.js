/* global google */
/* global google */
angular
.module('groupProject')
.directive('googleMap', googleMap);

function googleMap() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="map"> GOOGLE MAP HERE</div>',
    scope: {
      center: '=',
      coordinates: '=',
      geo: '='
    },
    link(scope, element) {
      let map = null;
      let marker = null;

      scope.$watch('center',  setCenter);
      scope.$on('$destroy', destroyMap);




      initMap();
      var infoWindow;
      function initMap() {
        map = new google.maps.Map(element[0], {
          zoom: 12,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          styles: style1
        });

        marker = new google.maps.Marker({
          map: map,
          icon: 'http://i.imgur.com/7aCJw6L.png?1'
        });
        if(document.getElementById('map-new').classList.contains('marker')) {
          google.maps.event.addListener(map, 'click', function(event) {

            marker.setPosition(event.latLng);
            scope.center = marker.getPosition();
            scope.coordinates = marker.getPosition();



            console.log(scope.coordinates.lat());
            scope.$apply();
            // console.log(event.latLng.lat());
            // console.log(event.latLng.lng());
          });
        }
        function geoLoc() {
          infoWindow = new google.maps.InfoWindow();
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              console.log('geo');
              infoWindow.setPosition(pos);
              infoWindow.setContent('Your location. ');
              infoWindow.open(map);
              map.setCenter(pos);

              scope.infoGeoLoc = infoWindow.getPosition();
              scope.geo = { lat: scope.infoGeoLoc.lat(), lng: scope.infoGeoLoc.lng() };
              console.log(scope.geo);
              scope.$apply();



            }, function() {
              handleLocationError(true, infoWindow, map.getCenter());
            });
          }

        }
        scope.$watch('geo',  geoLoc);


      }



      function setCenter() {
        map.setCenter(scope.center);
        marker.setPosition(scope.center);



      }

      function destroyMap() {
        console.log('MEEEEOWWWWW!!!!');
        marker.setMap(null);
        marker = null;
        map = null;
      }


    }
  };



}
const style1 = [
  {
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "color": "#fcfcfc"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "color": "#fcfcfc"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "color": "#dddddd"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "color": "#dddddd"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      },
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
        "visibility": "simplified"
      },
      {
        "color": "#dddddd"
      }
    ]
  }
];
