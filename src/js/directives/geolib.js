angular
.module('groupProject')
.directive('distance', distance);


function distance() {
  return {
    restrict: 'E',
    template: '<div class="geolib">{{ distance }} km away</div>',
    scope: {
      locationA: '=',
      locationB: '='
    },
    link(scope) {

      scope.$watchGroup(['locationA', 'locationB'], displayDistance, true);

      function displayDistance() {
        console.log(scope.locationA, scope.locationB);
        if(!scope.locationA || !scope.locationB) return false;

        function deg2rad(deg) {
          return deg * (Math.PI/180);
        }

        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(scope.locationB.lat-scope.locationA.lat);  // deg2rad below
        var dLng = deg2rad(scope.locationB.lng-scope.locationA.lng);
        var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(scope.locationA.lat)) * Math.cos(deg2rad(scope.locationB.lat)) *
        Math.sin(dLng/2) * Math.sin(dLng/2)
        ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c; // Distance in km

        scope.distance = d.toFixed(2);

      }
    }

  };
}
