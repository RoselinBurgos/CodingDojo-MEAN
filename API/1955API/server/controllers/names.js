var mongoose = require('mongoose');
var Name = mongoose.model('Name');



module.exports = {

    index: function(req, res) {
        Name.find({},function(err,names){
            if(err){
                res.json(err)
                console.log(err);
            }else{
                res.json(names)
                console.log(names);
            }
        });
    },

    newName: function(req, res) {
        Name.create({name:req.params.name}, function(err, result){
            if (err){
                res.json(err);
            }
            else{
                res.json(result)
            }
        });
    },

    remove: function(req,res){
        Name.remove({name:req.params.name},function(err,task){
            if(err)
                res.json(err);
            else
                res.json({removed:true});
        })
    },



}