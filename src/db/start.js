const Sequelize = require('sequelize');

const ConfigDefault = require('../config/database');

const Customers = require('../models/Customers');

//const Address = require('../models/Addresses');

const connection = new Sequelize(ConfigDefault);

Customers.init(connection);

//Address.init(connection);

//Customers.associate(connection.models);

//Address.associate(connection.models);

module.exports = connection;