const Post = require('../models/post');
const Comment = require('../models/comments');

// Creating a comment on a existing Post
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


// Deleting a comment

module.exports.destroy = function(req, res){

    Comment.findById(req.params.id).then(function(comment){
    if(comment.user == req.user.id){
    
        let postId = comment.post;
        comment.remove();
        Post.findByIdAndUpdate(postId, {$pull:{comments:req.params.id}}).then(function(post){
        return res.redirect('back');
    }).catch(function(err){
        console.log(err, 'In Finding the comment');
    });
    }else{
        res.redirect('back');
    }
    
    }).catch(function(err){
    console.log(err, 'In deleting the Comment');
    });
    
    
    }// Main Function close