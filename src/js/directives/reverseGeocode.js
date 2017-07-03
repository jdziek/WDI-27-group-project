angular
  .module('groupProject')
  .directive('reverseGeocode', reverseGeocode);

function reverseGeocode() {
  return {
    restrict: 'E',
    template: '<div></div>',
    scope: {
      coordinates: '='
    },
    link: function (scope, element, attrs) {
      const geocoder = new google.maps.Geocoder();
      // const latlng = new google.maps.LatLng(attrs.lat, attrs.lng);

      scope.$watch('coordinates',  geocodeLocation);

      function geocodeLocation(latLng) {
        geocoder.geocode({ latLng }, function (results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            if (results[2]) {
              element.text(results[2].formatted_address);
              console.log(results);
            } else {
              element.text('Location not found');
            }
          } else {
            element.text('Geocoder failed due to: ' + status);
          }
        });
      }
    },
    replace: true
  };
}
