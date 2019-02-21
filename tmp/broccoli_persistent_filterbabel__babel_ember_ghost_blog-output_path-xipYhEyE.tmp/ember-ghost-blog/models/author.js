define('ember-ghost-blog/models/author', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    name: _emberData.default.attr('string'),
    image: _emberData.default.attr('string'),
    coverImage: _emberData.default.attr('string'),
    coverMeta: _emberData.default.attr(),
    content: _emberData.default.attr('string'),
    website: _emberData.default.attr('string'),
    twitter: _emberData.default.attr('string'),
    facebook: _emberData.default.attr('string'),
    location: _emberData.default.attr('string'),

    posts: _emberData.default.hasMany('content')
  });
});