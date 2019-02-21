define('ember-ghost-blog/initializers/routes', ['exports', 'ember-ghost-blog/router'], function (exports, _router) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    _router.default.map(function () {
      this.route('post', { path: ':id' });
      this.route('page', { path: '/page/:id' });
      this.route('author', { path: '/author/:id' });
      this.route('tag', { path: '/tag/:id' });
    });
  }

  exports.default = {
    initialize
  };
});