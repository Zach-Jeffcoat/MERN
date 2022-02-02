const jokeController = require("../controllers/joke.controller");


    module.exports = (app) => {
        app.get("/api/jokes", jokeController.findAll);
        app.post("/api/jokes", jokeController.create);
        app.get("/api/jokes/:id", jokeController.findOne); 
        app.delete("/api/jokes/:id", jokeController.delete);
        app.put("/api/jokes/:id", jokeController.update);
    }   