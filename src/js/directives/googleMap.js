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
      coordinates: '='
    },
    link(scope, element) {
      let map = null;
      let marker = null;


      scope.$watch('center',  setCenter);
      scope.$on('$destroy', destroyMap);

      initMap();

      function initMap() {
        map = new google.maps.Map(element[0], {
          zoom: 10
        });

        marker = new google.maps.Marker({
          map: map
        });

        if(document.getElementById('map').classList.contains('marker')) {
          google.maps.event.addListener(map, 'click', function(event) {

            marker.setPosition(event.latLng);
            scope.center = marker.getPosition();
            scope.coordinates = marker.getPosition();
            scope.$apply();
            console.log(event.latLng.lat());
            console.log(event.latLng.lng());
          });
        }



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
