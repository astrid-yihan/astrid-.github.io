define('ember-ghost-blog/components/markdown-to-html', ['exports', 'ember-cli-showdown/components/markdown-to-html'], function (exports, _markdownToHtml) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _markdownToHtml.default.extend({
    classNames: ['kg-card-markdown']
  });
});