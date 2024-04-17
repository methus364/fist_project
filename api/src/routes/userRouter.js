const  {Router}  = require('express/lib/router');
const express = require('express')
const userRout = express()
const  getallUser  =  require('../controllers/userController')
// const userRout = {Router}; 
userRout.get('/', getallUser);

module.exports = userRout;