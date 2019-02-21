define('ember-ghost-blog/components/floating-header', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    blog: Ember.inject.service(),
    fastboot: Ember.inject.service(),
    value: 0,
    classNameBindings: [':floating-header', 'floating:floating-active'],
    init() {
      this._super(...arguments);

      if (Ember.get(this, 'fastboot.isFastBoot')) {
        return;
      }

      Ember.set(this, 'lastScrollY', window.scrollY);
      Ember.set(this, 'lastWindowHeight', window.innerHeight);
      Ember.set(this, 'lastDocumentHeight', Ember.$(document).height());

      this.update();
    },

    didInsertElement() {
      let scrollEvent = () => {
        Ember.set(this, 'lastScrollY', window.scrollY);
        this.requestTick();
      };
      Ember.set(this, 'scrollEvent', scrollEvent);
      window.addEventListener('scroll', scrollEvent, { passive: true });

      window.addEventListener('resize', () => {
        Ember.set(this, 'lastWindowHeight', window.innerHeight);
        Ember.set(this, 'lastDocumentHeight', Ember.$(document).height());
        this.requestTick();
      }, false);
    },

    didDestroyElement() {
      let scrollEvent = this.scrollEvent;

      if (scrollEvent) {
        Ember.set(this, 'scrollEvent', null);
        window.removeEventListener('scroll', scrollEvent);
      }
    },

    requestTick() {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          this.update();
        });
      }
      Ember.set(this, 'ticking', true);
    },

    update() {
      // debugger
      var title = document.querySelector('.post-full-title');
      var lastScrollY = this.lastScrollY;

      var trigger = title.getBoundingClientRect().top + window.scrollY;
      var triggerOffset = title.offsetHeight + 35;
      var progressMax = this.lastDocumentHeight - this.lastWindowHeight;

      // show/hide floating header
      if (lastScrollY >= trigger + triggerOffset) {
        Ember.set(this, 'floating', true);
      } else {
        Ember.set(this, 'floating', false);
      }

      Ember.set(this, 'max', progressMax);
      Ember.set(this, 'value', this.lastScrollY);

      Ember.set(this, 'ticking', false);
    }
  });
});