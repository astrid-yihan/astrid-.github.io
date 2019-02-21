define('ember-body-class/util/bodyClass', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.addClass = addClass;
  exports.removeClass = removeClass;
  function addClass(element, klass) {
    if (typeof FastBoot === 'undefined') {
      element.classList.add(klass);
    } else {
      let existingClass = element.getAttribute('class') || '';

      if (existingClass) {
        let classes = existingClass.split(' ');

        if (classes.includes(klass)) {
          return;
        }

        element.setAttribute('class', `${existingClass} ${klass}`);
      } else {
        element.setAttribute('class', klass);
      }
    }
  }

  function removeClass(element, klass) {
    if (typeof FastBoot === 'undefined') {
      element.classList.remove(klass);
    } else {
      let existingClass = element.getAttribute('class');
      element.setAttribute('class', existingClass.replace(klass, ''));
    }
  }
});