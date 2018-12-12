var mongoose = require('mongoose');
var Task = mongoose.model('Task');



module.exports = {

    index: function(req, res) {
        Task.find({},function(err, allTasks){
            if(err){
                res.json(err)
                console.log(err);
            }else{
                res.json(allTasks)
                console.log({message: "It worked!", Task: allTasks});
            }
        });
    },

    create: function(req, res) {
        Task.create(req.body, function(err, data){
            if (err){
                res.json(err);
            }
            else{
                res.json(data)
            }
        });
    },


    show_one: function(req, res) {
        Task.findOne({_id:req.params.id},function(err,allTasks){
            if(err){
                res.json(err)
                console.log(err);
            }else{
                res.json(allTasks)
                console.log({message: "It worked!", data: allTasks});
            }
        });
    },

    update: function(req, res){
        Task.findByIdAndUpdate({_id: req.params.id},{
            $set:{
                title: req.body.title,
                description: req.body.description
            }
        }, function(err, data){
            if(err)
                res.json(err);
            else
                res.json(data);
        })
    },


    delete: function(req,res){
        Task.findByIdAndRemove({_id:req.params.id},function(err,data){
            if(err)
                res.json(err);
            else
                res.json(data);
        })
    },



}