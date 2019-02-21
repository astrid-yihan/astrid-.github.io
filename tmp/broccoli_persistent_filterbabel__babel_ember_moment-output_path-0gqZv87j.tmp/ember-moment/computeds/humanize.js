define('ember-moment/computeds/humanize', ['exports', 'moment', 'ember-moment/computeds/-base'], function (exports, _moment, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = (0, _base.default)(function humanizeComputed([duration, suffixless]) {
    if (!_moment.default.isDuration(duration)) {
      duration = _moment.default.duration(duration);
    }

    return duration.humanize(suffixless);
  });
});