define('ember-ghost-blog/helpers/excerpt', ['exports', 'lodash', 'downsize'], function (exports, _lodash, _downsize) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.getExcerpt = getExcerpt;
    exports.excerpt = excerpt;
    function getExcerpt(html, truncateOptions) {
        truncateOptions = truncateOptions || {};
        // Strip inline and bottom footnotes
        var excerpt = html.replace(/<a href="#fn.*?rel="footnote">.*?<\/a>/gi, '');
        excerpt = excerpt.replace(/<div class="footnotes"><ol>.*?<\/ol><\/div>/, '');
        // Strip other html
        excerpt = excerpt.replace(/<\/?[^>]+>/gi, '');
        excerpt = excerpt.replace(/(\r\n|\n|\r)+/gm, ' ');

        if (!truncateOptions.words && !truncateOptions.characters) {
            truncateOptions.words = 50;
        }

        return (0, _downsize.default)(excerpt, truncateOptions);
    }

    function excerpt(content, options /*, hash*/) {
        var truncateOptions = options || {};
        var excerptText = options.custom_excerpt ? String(options.custom_excerpt) : String(content);

        truncateOptions = _lodash.default.pick(truncateOptions, ['words', 'characters']);
        _lodash.default.keys(truncateOptions).map(function (key) {
            truncateOptions[key] = parseInt(truncateOptions[key], 10);
        });

        if (!_lodash.default.isEmpty(options.custom_excerpt)) {
            truncateOptions.characters = options.custom_excerpt.length;
            if (truncateOptions.words) {
                delete truncateOptions.words;
            }
        }

        return Ember.String.htmlSafe(getExcerpt(excerptText, truncateOptions));
    }

    exports.default = Ember.Helper.helper(excerpt);
});