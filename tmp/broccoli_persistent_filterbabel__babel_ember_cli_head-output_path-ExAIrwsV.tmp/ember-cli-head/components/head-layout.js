define('ember-cli-head/components/head-layout', ['exports', 'ember-cli-head/templates/components/head-layout'], function (exports, _headLayout) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: '',
    layout: _headLayout.default,

    /**
     * If true, this will tear down any existing head on init of this component.
     * This is useful if there is a head built with fastboot - it will then be torn down when this is initialized in the browser.
     * If you do not want this behavior, you can set this to false.
     * @public
     */
    shouldTearDownOnInit: true,

    headElement: Ember.computed(function () {
      let documentService = Ember.getOwner(this).lookup('service:-document');
      return documentService.head;
    }),

    init() {
      this._super(...arguments);

      if (Ember.get(this, 'shouldTearDownOnInit')) {
        this._tearDownHead();
      }
    },

    /**
     * Tear down any previous head, if there was one.
     * @private
     */
    _tearDownHead() {
      if (this._isFastboot()) {
        return;
      }

      // clear fast booted head (if any)
      let startMeta = document.querySelector('meta[name="ember-cli-head-start"]');
      let endMeta = document.querySelector('meta[name="ember-cli-head-end"]');
      if (startMeta && endMeta) {
        let el = startMeta.nextSibling;
        while (el && el !== endMeta) {
          document.head.removeChild(el);
          el = startMeta.nextSibling;
        }
        document.head.removeChild(startMeta);
        document.head.removeChild(endMeta);
      }
    },

    _isFastboot() {
      return typeof FastBoot !== 'undefined';
    }

  });
});