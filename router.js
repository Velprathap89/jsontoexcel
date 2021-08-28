const express = require('express');
const router = express.Router();
const userController = require('./userController');

let routes = (app) => {
    router.get("/download", userController.download);
    
    app.use("/api/csv", router);
};

module.exports = routes;