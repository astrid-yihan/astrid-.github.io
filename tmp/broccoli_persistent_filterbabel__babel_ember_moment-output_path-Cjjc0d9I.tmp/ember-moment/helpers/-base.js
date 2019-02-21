define('ember-moment/helpers/-base', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Helper.extend({
    moment: Ember.inject.service(),
    disableInterval: false,
    globalAllowEmpty: Ember.computed.bool('moment.__config__.allowEmpty'),
    supportsGlobalAllowEmpty: true,
    localeOrTimeZoneChanged: Ember.observer('moment.locale', 'moment.timeZone', function () {
      this.recompute();
    }),

    compute(value, { interval }) {
      if (Ember.get(this, 'disableInterval')) {
        return;
      }

      this.clearTimer();

      if (interval) {
        /*
         * NOTE: intentionally a setTimeout so tests do not block on it
         * as the run loop queue is never clear so tests will stay locked waiting
         * for queue to clear.
         */
        this.intervalTimer = setTimeout(() => {
          Ember.run(() => this.recompute());
        }, parseInt(interval, 10));
      }
    },

    morphMoment(time, { locale, timeZone }) {
      const momentService = Ember.get(this, 'moment');

      locale = locale || Ember.get(momentService, 'locale');
      timeZone = timeZone || Ember.get(momentService, 'timeZone');

      if (locale && time.locale) {
        time = time.locale(locale);
      }

      if (timeZone && time.tz) {
        time = time.tz(timeZone);
      }

      return time;
    },

    clearTimer() {
      clearTimeout(this.intervalTimer);
    },

    destroy() {
      this.clearTimer();
      this._super(...arguments);
    }
  });
});