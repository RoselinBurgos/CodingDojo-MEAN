var mongoose = require('mongoose');
var Cake = mongoose.model('Cake');
var Comment = mongoose.model('Comment');



module.exports = {

    index: function(req,res){
        Cake.find({}, function (err, cakes){
            res.json(cakes);
        })
    },


    create: function(req, res) {
        Cake.create(req.body, function(err,cake ){
            if(err){
                res.json(err);

            }else{
                res.json(cake);

            }
        })
    },

    

    createComment: function(req,res){
        Cake.findOne({_id: req.params.id}, function(err,cake){
            if(err){
                console.log('THERE ARE ERRORS!');
                res.json(err);
            }else{
                Comment.create(req.body, function(err, comment){
                    if(err){
                        console.log('Error saving Comment!')
                        res.json(err);
                    }else{
                        cake.comments.push(comment);
                        cake.save(function(err){
                            if(err){
                                console.log('Didnt push to Comments!');
                                res.json(err);
                            }else{
                                console.log('WE DID IT!')
                                res.json(comment);
                            }
                        })
                    }
                })
            }

        })
    }








}