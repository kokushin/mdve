'use strict';

var Vue = require('vue');
var marked = require('marked');

var mdve = new Vue({
  el: '#mdve',
  data: {
    input: '# MarkDown Visual Editor'
  },
  filters: {
    marked: marked
  }
});