const Router = require('express').Router();
const userRoutes = require('./userRoutes');
const vendorRoutes = require('./vendorRoutes')


Router.use('/user', userRoutes);
Router.use('/vendor', vendorRoutes);


module.exports = Router;