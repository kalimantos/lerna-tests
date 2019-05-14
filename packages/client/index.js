const formatters = require('formatters');
const translations = require('translations');

module.exports = (function() {
  console.log('CLIENT!');
  return "CLIENT" + formatters() + translations();
})();
