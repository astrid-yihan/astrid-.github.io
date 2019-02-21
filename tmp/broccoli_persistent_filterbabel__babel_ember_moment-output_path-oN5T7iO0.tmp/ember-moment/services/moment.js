define('ember-moment/services/moment', ['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  // question unresolved https://github.com/ember-cli/ember-rfc176-data/issues/12#issuecomment-318603308
  const { Logger: { warn } } = Ember;

  exports.default = Ember.Service.extend(Ember.Evented, {
    _timeZone: null,

    locale: null,
    localeOptions: null,
    defaultFormat: null,

    __config__: Ember.computed(function () {
      let config = Ember.getOwner(this).factoryFor('config:environment').class || {};

      return Ember.get(config, 'moment') || {};
    }).readOnly(),

    timeZone: Ember.computed('_timeZone', {
      get() {
        return Ember.get(this, '_timeZone');
      },

      set(propertyKey, timeZone) {
        if (!_moment.default.tz) {
          warn('[ember-moment] attempted to set timezone, but moment-timezone is not setup.');
          return;
        }

        Ember.set(this, '_timeZone', timeZone);

        return timeZone;
      }
    }),

    setLocale(locale) {
      this.changeLocale(locale);
    },

    updateLocale(locale, localeOptions = {}) {
      this.changeLocale(locale, localeOptions);
    },

    changeLocale(locale, localeOptions = {}) {
      Ember.setProperties(this, {
        locale,
        localeOptions
      });
      _moment.default.updateLocale(locale, localeOptions);
      this.trigger('localeChanged', locale);
    },

    setTimeZone(timeZone) {
      this.changeTimeZone(timeZone);
    },

    changeTimeZone(timeZone) {
      Ember.set(this, 'timeZone', timeZone);
      this.trigger('timeZoneChanged', timeZone);
    },

    isMoment(obj) {
      return _moment.default.isMoment(obj);
    },

    moment() {
      let momentObj = (0, _moment.default)(...arguments);
      let { locale, timeZone } = Ember.getProperties(this, 'locale', 'timeZone');

      if (locale && momentObj.locale) {
        momentObj = momentObj.locale(locale);
      }

      if (timeZone && momentObj.tz) {
        momentObj = momentObj.tz(timeZone);
      }

      return momentObj;
    },

    utc() {
      let momentObj = _moment.default.utc(...arguments);

      let { locale } = Ember.getProperties(this, 'locale');

      if (locale && momentObj.locale) {
        momentObj = momentObj.locale(locale);
      }

      return momentObj;
    }
  });
});