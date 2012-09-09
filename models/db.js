var settings = require('../settings.js');
var Db = require('mongodb').Db;
var Connetion = require('mongodb').Connetion;
var Server = require('mongodb').Server;

module.exports = new Db(settings.db, new Server(settings.host, settings.port, {}));