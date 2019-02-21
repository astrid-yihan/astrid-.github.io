
if (typeof FastBoot === 'undefined') {
  if (!runningTests) {
    require('ember-ghost-blog/app')['default'].create({"name":"ember-ghost-blog","version":"0.0.0+51b1015a"});
  }
}

define('~fastboot/app-factory', ['ember-ghost-blog/app', 'ember-ghost-blog/config/environment'], function(App, config) {
  App = App['default'];
  config = config['default'];

  return {
    'default': function() {
      return App.create(config.APP);
    }
  };
});

