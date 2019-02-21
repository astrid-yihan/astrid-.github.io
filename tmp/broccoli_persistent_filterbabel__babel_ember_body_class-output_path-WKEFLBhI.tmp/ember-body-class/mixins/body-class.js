define('ember-body-class/mixins/body-class', ['exports', 'ember-body-class/util/bodyClass'], function (exports, _bodyClass) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Mixin.create({
    actions: {
      loading() /* transition, route */{
        const document = this.owner.lookup('service:-document');
        const body = document.body;

        (0, _bodyClass.addClass)(body, 'loading');

        this.router.on('didTransition', function () {
          (0, _bodyClass.removeClass)(body, 'loading');
        });

        return true;
      },

      error: function () /* error, transition */{
        const document = this.owner.lookup('service:-document');
        const body = document.body;

        (0, _bodyClass.addClass)(body, 'error');

        this.router.on('didTransition', function () {
          (0, _bodyClass.removeClass)(body, 'error');
        });

        return true;
      }
    }
  });
});