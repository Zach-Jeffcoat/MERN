const author = require('../models/author.model');

module.exports = {

    findAllAuthors: (req, res) =>{
        author.find()
            .then((allauthors)=>{
                console.log(allAuthors);
                res.json(allAuthors);
            })
            .catch((err)=>{
                console.log("Find All Authors failed");
                res.json({message: "Something went wrong in findAll", error: err})
            })
    },

    createNewAuthor: (req, res)=>{
        author.create(req.body)
            .then((newAuthor)=>{
                console.log(newAuthor);
                res.json(newAuthor)
            })
            .catch((err)=>{
                console.log("Something went wrong in createNewauthor");
                res.status(400).json(err);
            })
    },

    findOneAuthor: (req, res)=>{
        author.findOne({_id: req.params.id}) 
            .then((oneAuthor)=>{
                console.log(oneAuthor);
                res.json(oneAuthor)
            })
            .catch((err)=>{
                console.log("Find One Author failed");
                res.json({message: "Something went wrong in findOneauthor", error: err})
            })
    },

    deleteAuthor: (req, res)=>{
        author.deleteOne({_id: req.params.id})
            .then((deletedAuthor)=>{
                console.log(deletedAuthor);
                res.json(deletedAuthor)
            })
            .catch((err)=>{
                console.log("Delete One Author failed");
                res.json({message: "Something went wrong in deleteOne", error: err})
            })
    },

    updateAuthor: (req, res)=>{
        author.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true} 
            )
            .then((updatedAuthor)=>{
                console.log(updatedAuthor);
                res.json(updatedAuthor)
            })
            .catch((err)=>{
                console.log("Something went wrong in updateAuthor");
                res.status(400).json(err); //See above
            })
    }

}
