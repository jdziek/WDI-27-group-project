
/* global google */

angular
  .module('groupProject')
  .directive('autocomplete', autocomplete);

autocomplete.$inject = [];
function autocomplete() {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      postcode: '='
    },
    link: function(scope, element, attrs, model) {
      const options = {
        types: []
        // componentRestrictions: {}
      };

      const autocomplete = new google.maps.places.Autocomplete(element[0], options);


      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();


        scope.postcode = place.geometry.location.toJSON();
      


        model.$setViewValue(element.val());
        scope.$apply();
      });
    }
  };
}
