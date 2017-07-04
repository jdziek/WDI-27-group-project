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
          zoom: 12
        });

        marker = new google.maps.Marker({
          map: map
        });

        if(document.getElementById('map-new').classList.contains('marker')) {
          google.maps.event.addListener(map, 'click', function(event) {

            marker.setPosition(event.latLng);
            scope.center = marker.getPosition();
            scope.coordinates = marker.getPosition();
            scope.$apply();
            // console.log(event.latLng.lat());
            // console.log(event.latLng.lng());
          });
        }
        function geoLoc() {
          infoWindow = new google.maps.InfoWindow;
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              console.log('geowo');
              infoWindow.setPosition(pos);
              infoWindow.setContent('Location found.');
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
