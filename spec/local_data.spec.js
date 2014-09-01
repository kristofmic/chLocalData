describe('localData', function() {

  var
    service,
    provider,
    window;

  beforeEach(module('ch.LocalData', function(localDataProvider) {
    provider = localDataProvider;
  }));

  beforeEach(inject(function($window) {
    window = $window;

    window.localData = { batman: 'Bruce Wayne' };
  }));

  describe('provider', function() {
    it('should exist', function() {
      expect(provider).to.not.be.undefined;
    });

    describe('setKey()', function() {
      it('should set the key for the localData object', function() {
        var
          localData;

        provider.setKey('foobar');

        window.foobar = { foo: 'baz' };

        inject(function($injector){
          localData = $injector.get('localData');
        });

        expect(localData('foo')).to.equal('baz');
      });

    });

    describe('setNameSpace()', function() {
      it('should set the namespace for the localData object', function() {
        var
          localData;

        provider.setNameSpace('foobar');

        window.foobar = { localData: { foo: 'baz' }};

        inject(function($injector){
          localData = $injector.get('localData');
        });

        expect(localData('foo')).to.equal('baz');
      });

    });
  });

  describe('factory', function() {
    beforeEach(inject(function($injector) {
      service = $injector.get('localData');
    }));

    it('should exist', function() {
      expect(service).to.not.be.undefined;
    });

    it('should get the value of the key inserted into the local data object', function() {
      expect(service('batman')).to.equal('Bruce Wayne');
    });

    it('should return undefined for values not on the local data object', function() {
      expect(service('robin')).to.be.undefined;
    });

    it('should set the value in the local data store if a value is passed in with the key', function() {
      expect(service('robin', 'Dick Grayson')).to.equal('Dick Grayson');
      expect(service('robin')).to.equal('Dick Grayson');
    });

    it('should not be bound to the localData object on window', function() {
      expect(service('batman')).to.equal('Bruce Wayne');

      window.localData.batman = 'Panzy';

      expect(service('batman')).to.equal('Bruce Wayne');
    });
  });
});