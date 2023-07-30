const Post = require('../models/post');
const Comment = require('../models/comments');


module.exports.create = function(req, res){

    // Post.findById(req.body.post, function(err,post){

    //     if(post){
    //         Comment.create({
    //             content: req.body.content,
    //             post: req.body.post,
    //             user:req.user._id
                
                  
    //         }, function(err, comment){
    //             // handle Error
    //             console.log(comment);
    //             if(err){console.log(err, 'Error saving comment to DB'); return;}
    //             post.comments.push(comment);
    //             post.save();
    //             res.redirect('/home1');
    //         });
    //     }
       
    // });


     Post.findById(req.body.post).then(function(post){
        console.log(post);
         Comment.create({
            content: req.body.content,
                post: req.body.post,
                 user:req.user._id
        }).then(function(comment){

    
                post.comments.push(comment);
                post.save();
                res.redirect('/home1');
            
    }).catch(function(err){
    console.log(err, 'Error is Saving  comment in DB')
    });
     }).catch(function(err){console.log(err, 'In Finding Post');});

}