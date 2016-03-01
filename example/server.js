var zetta = require('zetta');
var Door = require('../index');
var style = require('./apps/style');

zetta()
  .use(Door)
  .use(style)
  .properties({style: {backgroundColor: "#fff"}})
  .listen(1337);
