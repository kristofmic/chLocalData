(function(angular) {

  angular.module('ch.LocalData')
    .provider('localData', localDataProvider);

  function localDataProvider() {
    var
      localDataNameSpace = '',
      localDataKey = 'localData',
      definition;

    definition = [
      '$window',
      '_',
      localData
    ];

    return {
      setKey: setKey,
      setNameSpace: setNameSpace,
      $get: definition
    };

    function setKey(key) {
      localDataKey = key;
    }

    function setNameSpace(ns) {
      localDataNameSpace = ns;
    }

    function localData($window, _) {
      var
        localDataStore;

      if (localDataKey) {
        if (localDataNameSpace) {
          localDataStore = _.cloneDeep($window[localDataNameSpace][localDataKey]);
        }
        else {
          localDataStore = _.cloneDeep($window[localDataKey]);
        }
      }

      return localDataAccessor;

      function localDataAccessor(key, value) {
        if (!localDataStore) { throwError('Missing local data'); }

        if (!_.isEmpty(value)) {
          localDataStore[key] = value;
        }

        return localDataStore[key];
      }

    }
    function throwError(msg) {
      throw new Error(msg);
    }
  }



})(angular);