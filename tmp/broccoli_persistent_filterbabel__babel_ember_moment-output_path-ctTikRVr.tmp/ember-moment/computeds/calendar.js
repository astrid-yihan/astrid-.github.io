define('ember-moment/computeds/calendar', ['exports', 'moment', 'ember-moment/computeds/-base'], function (exports, _moment, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _base.default)(function calendarComputed(params, formatHash = {}) {
    if (!params || params && params.length > 3) {
      throw new TypeError('ember-moment: Invalid Number of arguments, at most 3');
    }

    const [date, referenceTime, formats] = params;
    const clone = Object.create(formatHash);
    const mergedFormats = Ember.merge(clone, formats);

    return (0, _moment.default)(date).calendar(referenceTime, mergedFormats);
  });
});