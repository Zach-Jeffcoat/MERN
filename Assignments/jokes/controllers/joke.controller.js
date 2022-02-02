const joke = require('../models/joke.model');

module.exports = {

    findAll: (req, res) =>{
        joke.find()
            .then((alljokes)=>{
                console.log(alljokes);
                res.json(alljokes);
            })
            .catch((err)=>{
                console.log("Find All jokes failed");
                res.json({message: "Something went wrong in findAll", error: err})
            })
    },

    create: (req, res)=>{
        joke.create(req.body)
            .then((newjoke)=>{
                console.log(newjoke);
                res.json(newjoke)
            })
            .catch((err)=>{
                console.log("Something went wrong in create");
                res.status(400).json(err);
            })
    },

    findOne: (req, res)=>{
        joke.findOne({_id: req.params.id})
            .then((onejoke)=>{
                console.log(onejoke);
                res.json(onejoke)
            })
            .catch((err)=>{
                console.log("Find One joke failed");
                res.json({message: "Something went wrong in findOne", error: err})
            })
    },

    delete: (req, res)=>{
        joke.deleteOne({_id: req.params.id})
            .then((deletedjoke)=>{
                console.log(deletedjoke);
                res.json(deletedjoke)
            })
            .catch((err)=>{
                console.log("Delete One joke failed");
                res.json({message: "Something went wrong in delete", error: err})
            })
    },

    update: (req, res)=>{
        joke.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true} 
            )
            .then((updatedjoke)=>{
                console.log(updatedjoke);
                res.json(updatedjoke)
            })
            .catch((err)=>{
                console.log("Something went wrong in update");
                res.status(400).json(err);
            })
    }

}