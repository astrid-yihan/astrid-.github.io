define('ember-cli-fastboot/locations/none', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const TEMPORARY_REDIRECT_CODE = 307;

  exports.default = Ember.NoneLocation.extend({
    implementation: 'fastboot',
    fastboot: Ember.inject.service(),

    _config: Ember.computed(function () {
      return Ember.getOwner(this).resolveRegistration('config:environment');
    }),

    _fastbootHeadersEnabled: Ember.computed.bool('_config.fastboot.fastbootHeaders'),

    _redirectCode: Ember.computed(function () {
      return Ember.get(this, '_config.fastboot.redirectCode') || TEMPORARY_REDIRECT_CODE;
    }),

    _response: Ember.computed.readOnly('fastboot.response'),
    _request: Ember.computed.readOnly('fastboot.request'),

    setURL(path) {
      if (Ember.get(this, 'fastboot.isFastBoot')) {
        let response = Ember.get(this, '_response');
        let currentPath = Ember.get(this, 'path');
        let isInitialPath = !currentPath || currentPath.length === 0;

        if (!isInitialPath) {
          path = this.formatURL(path);
          let isTransitioning = currentPath !== path;

          if (isTransitioning) {
            let host = Ember.get(this, '_request.host');
            let redirectURL = `//${host}${path}`;

            response.statusCode = this.get('_redirectCode');
            response.headers.set('location', redirectURL);
          }
        }

        // for testing and debugging
        if (Ember.get(this, '_fastbootHeadersEnabled')) {
          response.headers.set('x-fastboot-path', path);
        }
      }

      this._super(...arguments);
    }
  });
});