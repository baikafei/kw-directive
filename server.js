var connect = require('connect');
var serveStatic = require('serve-static');

connect().use(serveStatic('WebContent')).listen(5000);
