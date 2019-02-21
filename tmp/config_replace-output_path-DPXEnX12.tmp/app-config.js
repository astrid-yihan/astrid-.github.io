define('ember-ghost-blog/config/environment', [], function() {
  if (typeof FastBoot !== 'undefined') {
return FastBoot.config('ember-ghost-blog');
} else {
var prefix = 'ember-ghost-blog';try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

}
});
