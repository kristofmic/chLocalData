(function(angular) {

  var
    dependencies = [],
    factoryDefinition;

  factoryDefinition = [
    '$window',
    lodash
  ];

  angular.module('ch.Vendor.LoDash', dependencies)
    .factory('_', factoryDefinition);

  function lodash($window) { return $window._; }

})(angular);