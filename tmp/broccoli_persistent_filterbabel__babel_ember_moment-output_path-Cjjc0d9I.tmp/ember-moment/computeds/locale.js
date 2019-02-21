define('ember-moment/computeds/locale', ['exports', 'moment', 'ember-moment/computeds/-base'], function (exports, _moment, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _base.default)(function localeComputed([date, locale]) {
    if (!_moment.default.isDuration(date)) {
      date = (0, _moment.default)(date);
    }

    return date.locale(locale);
  });
});