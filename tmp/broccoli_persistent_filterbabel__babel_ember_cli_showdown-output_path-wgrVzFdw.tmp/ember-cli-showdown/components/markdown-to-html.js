define('ember-cli-showdown/components/markdown-to-html', ['exports', 'showdown', 'ember-cli-showdown/templates/components/markdown-to-html'], function (exports, _showdown, _markdownToHtml) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const CONFIG_LOOKUP = 'config:environment';

  const ShowdownComponent = Ember.Component.extend({
    layout: _markdownToHtml.default,
    markdown: '',
    _globalOptions: null,

    extensions: Ember.computed(function () {
      return [];
    }),

    defaultOptionKeys: Ember.computed(function () {
      return Object.keys(_showdown.default.getDefaultOptions());
    }).readOnly(),

    init() {
      this._super(...arguments);
      const owner = Ember.getOwner(this);

      if (owner && owner.hasRegistration(CONFIG_LOOKUP)) {
        this._globalOptions = (owner.resolveRegistration(CONFIG_LOOKUP) || {}).showdown;
      }
    },

    html: Ember.computed('markdown', 'converter', function () {
      let showdownOptions = this.getShowdownProperties(Ember.get(this, 'defaultOptionKeys'));
      let converter = Ember.get(this, 'converter');

      for (let option in showdownOptions) {
        if (showdownOptions.hasOwnProperty(option) && typeof showdownOptions[option] !== 'undefined') {
          converter.setOption(option, showdownOptions[option]);
        }
      }

      return Ember.String.htmlSafe(converter.makeHtml(Ember.get(this, 'markdown')));
    }).readOnly(),

    converter: Ember.computed('extensions', function () {
      let extensions = Ember.get(this, 'extensions');

      if (typeof extensions === 'string') {
        extensions = extensions.split(' ');
      }

      return new _showdown.default.Converter({ extensions });
    }),

    getShowdownProperties(keyNames) {
      return keyNames.reduce((accumulator, keyName) => {
        let value = Ember.get(this, keyName);

        if (value === undefined && this._globalOptions) {
          value = Ember.get(this._globalOptions, keyName);
        }

        accumulator[keyName] = value;

        return accumulator;
      }, {});
    }
  });

  ShowdownComponent.reopenClass({
    positionalParams: ['markdown']
  });

  exports.default = ShowdownComponent;
});