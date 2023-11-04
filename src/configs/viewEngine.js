import express from "express"

// config viewEengine
let configViewEngine = (app) => {
    app.use(express.static('./src/public'));
    app.set("view engine", 'ejs');
    app.set("views", "./src/views");
}

module.exports = configViewEngine