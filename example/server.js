var zetta = require('zetta');
var Door = require('../index');

zetta()
  .use(Door)
  .listen(1337);