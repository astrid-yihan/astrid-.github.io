define('ember-ghost-blog/models/content', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    title: _emberData.default.attr('string'),
    canonical: _emberData.default.attr(),
    content: _emberData.default.attr('string'),
    html: _emberData.default.attr('string'),

    image: _emberData.default.attr('string'),
    imageMeta: _emberData.default.attr(),
    featured: _emberData.default.attr('boolean'),
    status: _emberData.default.attr('string'),
    date: _emberData.default.attr('date'),
    tags: _emberData.default.attr(),

    primaryTag: Ember.computed('tags.[]', function () {
      return Ember.get(this, 'tags.firstObject');
    }),

    author: _emberData.default.belongsTo('author')
  });
});