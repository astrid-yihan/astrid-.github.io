define('ember-body-class/instance-initializers/body-class', ['exports', 'ember-body-class/util/bodyClass'], function (exports, _bodyClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize(instance) {
    var config;

    if (instance.resolveRegistration) {
      // Ember 2.1+
      // http://emberjs.com/blog/2015/08/16/ember-2-1-beta-released.html#toc_registry-and-container-reform
      config = instance.resolveRegistration('config:environment');
    } else {
      config = instance.container.lookupFactory('config:environment');
    }

    // Default to true when not set
    let _includeRouteName = true;
    if (config['ember-body-class'] && config['ember-body-class'].includeRouteName === false) {
      _includeRouteName = false;
    }

    Ember.Route.reopen({
      classNames: [],
      bodyClasses: Object.freeze([]),

      _getRouteDepthClasses() {
        let routeParts = this.get('routeName').split('.');
        let routeDepthClasses = routeParts.slice(0);
        let currentSelector = [];

        routeParts.forEach(part => {
          currentSelector.push(part);

          routeDepthClasses.push(currentSelector.join(`-`));
        });

        return routeDepthClasses;
      },

      addClasses: Ember.on('activate', function () {
        const document = instance.lookup('service:-document');
        const body = document.body;
        ['bodyClasses', 'classNames'].forEach(classes => {
          this.get(classes).forEach(function (klass) {
            (0, _bodyClass.addClass)(body, klass);
          });
        });

        if (_includeRouteName) {
          this._getRouteDepthClasses().forEach(depthClass => {
            (0, _bodyClass.addClass)(body, depthClass);
          });
        }
      }),

      removeClasses: Ember.on('deactivate', function () {
        const document = instance.lookup('service:-document');
        const body = document.body;

        ['bodyClasses', 'classNames'].forEach(classes => {
          this.get(classes).forEach(function (klass) {
            (0, _bodyClass.removeClass)(body, klass);
          });
        });

        if (_includeRouteName) {
          this._getRouteDepthClasses().forEach(depthClass => {
            (0, _bodyClass.removeClass)(body, depthClass);
          });
        }
      })
    });
  }

  exports.default = {
    name: 'body-class',
    initialize: initialize
  };
});