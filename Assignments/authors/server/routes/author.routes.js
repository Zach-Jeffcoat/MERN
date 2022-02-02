const AuthorController = require("../controllers/Author.controller");


module.exports = (app) => {
    app.get("/api/Authors", AuthorController.findAllAuthors);
    app.post("/api/Authors", AuthorController.createNewAuthor);
    app.get("/api/Authors/:id", AuthorController.findOneAuthor); 
    app.delete("/api/Authors/:id", AuthorController.deleteAuthor);
    app.put("/api/Authors/:id", AuthorController.updateAuthor);


}