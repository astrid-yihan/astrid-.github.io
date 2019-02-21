define("ember-ghost-blog/templates/post", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "kSikLm1h", "block": "{\"symbols\":[\"post\"],\"statements\":[[0,\"\\n\"],[0,\"\\n\"],[7,\"header\"],[11,\"class\",\"site-header outer\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"inner\"],[9],[0,\"\\n        \"],[1,[21,\"site-nav\"],false],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[0,\"\\n\"],[7,\"main\"],[11,\"id\",\"site-main\"],[11,\"class\",\"site-main outer\"],[11,\"role\",\"main\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"inner\"],[9],[0,\"\\n        \"],[7,\"article\"],[12,\"class\",[28,[\"post-full post \",[27,\"unless\",[[23,[\"model\",\"post\",\"image\"]],\"no-image\"],null]]]],[9],[0,\"\\n            \"],[7,\"header\"],[11,\"class\",\"post-full-header\"],[9],[0,\"\\n                \"],[7,\"section\"],[11,\"class\",\"post-full-meta\"],[9],[0,\"\\n                    \"],[7,\"time\"],[11,\"class\",\"post-full-meta-date\"],[12,\"datetime\",[28,[[27,\"moment-format\",[[23,[\"model\",\"post\",\"date\"]],\"YYYY-MM-DD\"],null]]]],[9],[1,[27,\"moment-format\",[[23,[\"model\",\"post\",\"date\"]],\"D MMMM YYYY\"],null],false],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"post\",\"primaryTag\"]]],null,{\"statements\":[[0,\"                      \"],[7,\"span\"],[11,\"class\",\"date-divider\"],[9],[0,\"/\"],[10],[0,\" \"],[4,\"link-to\",[\"tag\",[23,[\"model\",\"post\",\"primaryTag\"]]],null,{\"statements\":[[0,\" \"],[1,[23,[\"model\",\"post\",\"primaryTag\"]],false]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                \"],[10],[0,\"\\n                \"],[7,\"h1\"],[11,\"class\",\"post-full-title\"],[9],[1,[23,[\"model\",\"post\",\"title\"]],false],[10],[0,\"\\n            \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"model\",\"post\",\"image\"]]],null,{\"statements\":[[0,\"              \"],[7,\"figure\"],[11,\"class\",\"post-full-image\"],[12,\"style\",[28,[\"background-image: url(\",[27,\"url\",[[23,[\"model\",\"post\",\"image\"]]],null],\")\"]]],[9],[0,\"\\n              \"],[10],[0,\"\\n\\n              \"],[1,[27,\"image-attribution\",null,[[\"meta\"],[[23,[\"model\",\"post\",\"imageMeta\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n            \"],[7,\"section\"],[11,\"class\",\"post-full-content\"],[9],[0,\"\\n                \"],[1,[27,\"markdown-to-html\",[[23,[\"model\",\"post\",\"content\"]]],null],false],[0,\"\\n            \"],[10],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"labs\",\"subscribers\"]]],null,{\"statements\":[[0,\"            \"],[7,\"section\"],[11,\"class\",\"subscribe-form\"],[9],[0,\"\\n                \"],[7,\"h3\"],[11,\"class\",\"subscribe-form-title\"],[9],[0,\"Subscribe to \"],[1,[23,[\"blog\",\"title\"]],false],[10],[0,\"\\n                \"],[7,\"p\"],[9],[0,\"Get the latest posts delivered right to your inbox\"],[10],[0,\"\\n                \"],[1,[27,\"subscribe_form\",null,[[\"placeholder\"],[\"youremail@example.com\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n            \"],[7,\"footer\"],[11,\"class\",\"post-full-footer\"],[9],[0,\"\\n                \"],[7,\"section\"],[11,\"class\",\"author-card\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"post\",\"author\",\"image\"]]],null,{\"statements\":[[0,\"                        \"],[7,\"img\"],[11,\"class\",\"author-profile-image\"],[12,\"src\",[28,[[23,[\"model\",\"post\",\"author\",\"image\"]]]]],[12,\"alt\",[28,[[23,[\"model\",\"post\",\"author\",\"name\"]]]]],[9],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                    \"],[7,\"section\"],[11,\"class\",\"author-card-content\"],[9],[0,\"\\n                        \"],[7,\"h4\"],[11,\"class\",\"author-card-name\"],[9],[4,\"link-to\",[\"author\",[23,[\"model\",\"post\",\"author\",\"id\"]]],null,{\"statements\":[[1,[23,[\"model\",\"post\",\"author\",\"name\"]],false]],\"parameters\":[]},null],[10],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"post\",\"author\",\"content\"]]],null,{\"statements\":[[0,\"                            \"],[7,\"p\"],[9],[1,[27,\"markdown-to-html\",[[23,[\"model\",\"post\",\"author\",\"content\",\"content\"]]],null],false],[10],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"                            \"],[7,\"p\"],[9],[0,\"Read \"],[4,\"link-to\",[\"author\",[23,[\"model\",\"post\",\"author\",\"id\"]]],null,{\"statements\":[[0,\"more posts\"]],\"parameters\":[]},null],[0,\" by this author.\"],[10],[0,\"\\n\"]],\"parameters\":[]}],[0,\"                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"post-full-footer-right\"],[9],[0,\"\\n                    \"],[4,\"link-to\",[\"author\",[23,[\"model\",\"post\",\"author\",\"id\"]]],[[\"class\"],[\"author-card-button\"]],{\"statements\":[[0,\"Read More\"]],\"parameters\":[]},null],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\\n\"],[0,\"\\n        \"],[10],[0,\"\\n\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"aside\"],[11,\"class\",\"read-next outer\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"inner\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"read-next-feed\"],[9],[0,\"\\n\"],[4,\"if\",[[23,[\"model\",\"post\",\"primaryTag\"]]],null,{\"statements\":[[4,\"if\",[[23,[\"relatedPosts\"]]],null,{\"statements\":[[0,\"               \"],[7,\"article\"],[11,\"class\",\"read-next-card\"],[12,\"style\",[21,\"tagBackgroundImageStyle\"]],[9],[0,\"\\n                  \"],[7,\"header\"],[11,\"class\",\"read-next-card-header\"],[9],[0,\"\\n                      \"],[7,\"small\"],[11,\"class\",\"read-next-card-header-sitetitle\"],[9],[0,\"— \"],[1,[23,[\"blog\",\"title\"]],false],[0,\" —\"],[10],[0,\"\\n                      \"],[7,\"h3\"],[11,\"class\",\"read-next-card-header-title\"],[9],[7,\"a\"],[12,\"href\",[28,[[21,\"url\"]]]],[9],[1,[23,[\"model\",\"post\",\"primaryTag\"]],false],[10],[10],[0,\"\\n                  \"],[10],[0,\"\\n                  \"],[7,\"div\"],[11,\"class\",\"read-next-divider\"],[9],[1,[21,\"svg-icons/infinity\"],false],[10],[0,\"\\n                  \"],[7,\"div\"],[11,\"class\",\"read-next-card-content\"],[9],[0,\"\\n                      \"],[7,\"ul\"],[9],[0,\"\\n\"],[4,\"each\",[[27,\"take\",[3,[23,[\"relatedPosts\"]]],null]],null,{\"statements\":[[0,\"                            \"],[7,\"li\"],[9],[4,\"link-to\",[\"post\",[22,1,[\"id\"]]],null,{\"statements\":[[1,[22,1,[\"title\"]],false]],\"parameters\":[]},null],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"                      \"],[10],[0,\"\\n                  \"],[10],[0,\"\\n\\n                  \"],[7,\"footer\"],[11,\"class\",\"read-next-card-footer\"],[9],[0,\"\\n                      \"],[4,\"link-to\",[\"tag\",[23,[\"model\",\"post\",\"primaryTag\"]]],null,{\"statements\":[[0,\" See all \"],[1,[23,[\"relatedPosts\",\"length\"]],false],[0,\" posts →\"]],\"parameters\":[]},null],[0,\"\\n                  \"],[10],[0,\"\\n              \"],[10],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n\"],[4,\"if\",[[23,[\"nextPost\"]]],null,{\"statements\":[[0,\"              \"],[1,[27,\"post-card\",null,[[\"post\"],[[23,[\"nextPost\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n\\n\"],[4,\"if\",[[23,[\"prevPost\"]]],null,{\"statements\":[[0,\"                \"],[1,[27,\"post-card\",null,[[\"post\"],[[23,[\"prevPost\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[1,[27,\"floating-header\",null,[[\"post\"],[[23,[\"model\",\"post\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-ghost-blog/templates/post.hbs" } });
});