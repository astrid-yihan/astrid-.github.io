define('ember-cli-fastboot/services/fastboot', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /* global FastBoot */
  const RequestObject = Ember.Object.extend({
    init() {
      this._super(...arguments);

      let request = this.request;
      delete this.request;

      this.method = request.method;
      this.body = request.body;
      this.cookies = request.cookies;
      this.headers = request.headers;
      this.queryParams = request.queryParams;
      this.path = request.path;
      this.protocol = request.protocol;
      this._host = function () {
        return request.host();
      };
    },

    host: Ember.computed(function () {
      return this._host();
    })
  });

  const Shoebox = Ember.Object.extend({
    put(key, value) {
      (true && !(this.get('fastboot.isFastBoot')) && Ember.assert('shoebox.put is only invoked from the FastBoot rendered application', this.get('fastboot.isFastBoot')));
      (true && !(typeof key === 'string') && Ember.assert('the provided key is a string', typeof key === 'string'));


      let fastbootInfo = this.get('fastboot._fastbootInfo');
      if (!fastbootInfo.shoebox) {
        fastbootInfo.shoebox = {};
      }

      fastbootInfo.shoebox[key] = value;
    },

    retrieve(key) {
      if (this.get('fastboot.isFastBoot')) {
        let shoebox = this.get('fastboot._fastbootInfo.shoebox');
        if (!shoebox) {
          return;
        }

        return shoebox[key];
      }

      let shoeboxItem = this.get(key);
      if (shoeboxItem) {
        return shoeboxItem;
      }

      let el = document.querySelector(`#shoebox-${key}`);
      if (!el) {
        return;
      }
      let valueString = el.textContent;
      if (!valueString) {
        return;
      }

      shoeboxItem = JSON.parse(valueString);
      this.set(key, shoeboxItem);

      return shoeboxItem;
    }
  });

  const FastBootService = Ember.Service.extend({
    cookies: Ember.computed.deprecatingAlias('request.cookies', { id: 'fastboot.cookies-to-request', until: '0.9.9' }),
    headers: Ember.computed.deprecatingAlias('request.headers', { id: 'fastboot.headers-to-request', until: '0.9.9' }),
    isFastBoot: typeof FastBoot !== 'undefined',

    init() {
      this._super(...arguments);

      let shoebox = Shoebox.create({ fastboot: this });
      this.set('shoebox', shoebox);
    },

    host: Ember.computed(function () {
      Ember.deprecate('Usage of fastboot service\'s `host` property is deprecated.  Please use `request.host` instead.', false, { id: 'fastboot.host-to-request', until: '0.9.9' });

      return this._fastbootInfo.request.host();
    }),

    response: Ember.computed.readOnly('_fastbootInfo.response'),
    metadata: Ember.computed.readOnly('_fastbootInfo.metadata'),

    request: Ember.computed(function () {
      if (!this.isFastBoot) return null;
      return RequestObject.create({ request: Ember.get(this, '_fastbootInfo.request') });
    }),

    deferRendering(promise) {
      (true && !(typeof promise.then === 'function') && Ember.assert('deferRendering requires a promise or thennable object', typeof promise.then === 'function'));

      this._fastbootInfo.deferRendering(promise);
    }
  });

  exports.default = FastBootService;
});