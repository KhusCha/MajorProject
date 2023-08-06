
const Post = require('../models/post');
const Comment = require('../models/comments');


// Action for creating a Post
// module.exports.create = function(req, res){
//     //console.log(req.user);
//     Post.create({
//         content:req.body.content,
//         user: req.user._id
//     }, function(err, post){
//         if(err){console.log('Error in creating a post'); return}
//         return res.redirect('back');
//     });


// }


            // Action for creating a Post unsing async and await
            // Personally, I found code written with async and await looks
            // cleaner and organized.

module.exports.create = async function(req, res){
  try{
    await Post.create({
      content: req.body.content,
      user:req.user._id 
    });
    return res.redirect('back');

  }catch(err){
    console.log('Error/Fehler/Locha ', err);
    return;
  }

}











// Action for deleting a Post

// module.exports.destroy = function(req, res){

//         Post.findById(req.params.id, function(err, post){
//             // .id means converting the object id into string
//             // it is an API given by mongoose and it converts _id into string,
//             // so we need not to write _id
//             if(post.user==req.user.id){
//                 Post.remove();
//                 Comment.deleteMany({post:req.params.id}, function(err){
//                     return res.redirect('back');
//                 });
//             }else{
//                 return res.redirect('back');
//             }
//         });
// }


// module.exports.destroy = function(req, res){
// Post.findById(req.params.id).then(function( post){
//      if(post.user== req.user.id){
//          Post.remove();
//                 Comment.deleteMany({post:req.params.id}, function(err){
//                     return res.redirect('back');
//                 });
//         }else{
//                 return res.redirect('back');
//             }
//         }).catch(function(err){
//     console.log(err);
// })
   
// }

// Action for deleting a Post, an alternative way of code
module.exports.destroy = function (req, res) {
    Post.findById(req.params.id)
      .then(function (post) {
        if (!post) {
          // If post not found, handle the error here (e.g., send an error response or redirect)
          return res.redirect("back");
        }
  
        // Check if the post belongs to the currently logged-in user
        if (post.user == req.user.id) {
          // Remove the post using deleteOne()
          Post.deleteOne({ _id: post.id }, function (err) {
            if (err) {
              console.log(err);
              return res.redirect("back");
            }
  
            // Remove associated comments using deleteMany()
            Comment.deleteMany({ post: post.id }, function (err) {
              if (err) {
                console.log(err);
                return res.redirect("back");
              }
  
              return res.redirect("back");
            });
          });
        } else {
          return res.redirect("back");
        }
      })
      .catch(function (err) {
        console.log(err)

        return res.redirect("back");
    });
};
