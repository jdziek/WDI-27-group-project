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

      function initMap() {
        var mapOptions = {
          zoom: 12,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          styles: style1,
          center: {lat: 51.5074, lng: 0.1278}
        };

        map = new google.maps.Map(element[0], mapOptions);
        marker = new google.maps.Marker({
          map: map,
          icon: 'https://image.ibb.co/e9sCsv/logo.png'
        });

      }
      if(document.getElementById('map-new').classList.contains('marker')) {
        google.maps.event.addListener(map, 'click', function(event) {
          marker.setPosition(event.latLng);
          scope.center = marker.getPosition();
          scope.coordinates = marker.getPosition();
          console.log(scope.coordinates.lat());
          scope.$apply();
        });
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
          map.setZoom(12);

          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          marker.setPosition(pos);
          map.setCenter(pos);
          scope.infoGeoLoc = marker.getPosition();
          scope.geo = { lat: scope.infoGeoLoc.lat(), lng: scope.infoGeoLoc.lng() };///doesnt like it but it works necesaryfor distance

          scope.$apply();



        });
      }

      function setCenter() {
        map.setCenter(scope.center);


        marker.setPosition(scope.center);



      }

      function destroyMap() {
        marker.setMap(null);
        marker = null;
        map = null;
      }


    }
  };



}


const style1 = [
  {
    'featureType': 'administrative',
    'elementType': 'all',
    'stylers': [
      {
        'visibility': 'simplified'
      }
    ]
  },
  {
    'featureType': 'landscape',
    'elementType': 'geometry',
    'stylers': [
      {
        'visibility': 'simplified'
      },
      {
        'color': '#fcfcfc'
      }
    ]
  },
  {
    'featureType': 'poi',
    'elementType': 'geometry',
    'stylers': [
      {
        'visibility': 'simplified'
      },
      {
        'color': '#fcfcfc'
      }
    ]
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [
      {
        'visibility': 'simplified'
      },
      {
        'color': '#dddddd'
      }
    ]
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'geometry',
    'stylers': [
      {
        'visibility': 'simplified'
      },
      {
        'color': '#dddddd'
      }
    ]
  },
  {
    'featureType': 'road.local',
    'elementType': 'geometry',
    'stylers': [
      {
        'visibility': 'simplified'
      },
      {
        'color': '#eeeeee'
      }
    ]
  },
  {
    'featureType': 'water',
    'elementType': 'geometry',
    'stylers': [
      {
        'visibility': 'simplified'
      },
      {
        'color': '#dddddd'
      }
    ]
  }
];
