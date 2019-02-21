define('ember-moment/computeds/format', ['exports', 'moment', 'ember-moment/computeds/-base'], function (exports, _moment, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const CONFIG_KEY = 'config:environment';

  exports.default = (0, _base.default)(function formatComputed([value, optionalFormat]) {
    if (!optionalFormat) {
      const owner = Ember.getOwner(this);

      if (owner && owner.hasRegistration && owner.hasRegistration(CONFIG_KEY)) {
        const config = owner.resolveRegistration(CONFIG_KEY);

        if (config) {
          optionalFormat = Ember.get(config, 'moment.outputFormat');
        }
      }
    }

    return (0, _moment.default)(value).format(optionalFormat);
  });
});