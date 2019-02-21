define('ember-ghost-blog/services/blog', ['exports', 'ember-ghost-blog/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function configParam(param) {
    return Ember.computed(function () {
      return Ember.get(_environment.default, `blog.${param}`);
    });
  }

  exports.default = Ember.Service.extend({
    title: configParam('title'),
    description: configParam('description'),
    logo: configParam('logo'),
    coverImage: configParam('coverImage'),
    coverMeta: configParam('coverMeta'),
    navigation: configParam('navigation'),
    twitter: configParam('twitter'),
    facebook: configParam('facebook'),
    host: configParam('host')
  });
});