var mongoose = require('mongoose');
var Author = mongoose.model('Author');



module.exports = {

    index: function(req, res) {
        Author.find({},function(err, allAuthors){
            if(err){
                res.json(err)
                console.log(err);
            }else{
                res.json(allAuthors)
                console.log({message: "It worked!", Author: allAuthors});
            }
        });
    },

    create: function(req, res) {
        Author.create(req.body, function(err, data){
            if (err){
                res.json(err);
            }
            else{
                res.json(data)
            }
        });
    },


    show_one: function(req, res) {
        Author.findOne({_id:req.params.id},function(err,allAuthors){
            if(err){
                res.json(err)
                console.log(err);
            }else{
                res.json(allAuthors)
                console.log({message: "It worked!", data: allAuthors});
            }
        });
    },

    update: function(req, res){
        Author.findByIdAndUpdate({_id: req.params.id},{
            $set:{
                name: req.body.name,
            }
        }, function(err, data){
            if(err)
                res.json(err);
            else
                res.json(data);
        })
    },


    delete: function(req,res){
        Author.findByIdAndRemove({_id:req.params.id},function(err,data){
            if(err)
                res.json(err);
            else
                res.json(data);
        })
    },



}