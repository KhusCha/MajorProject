const mongoMango = require('mongoose');

const postSchema = new mongoMango.Schema(
    {
         content: {
        type: String,
        required:true
        },
        user: {
        type: mongoMango.Schema.Types.ObjectId,
        ref: 'User'      
            
         },
         // Include the ids of all comments in the post Schema itself
         comments:[{
               type: mongoMango.Schema.Types.ObjectId,
               ref : 'Comment'
         }]

    },
    {timesStamps: true}
    );

    const Post = mongoMango.model('Post',postSchema);
    module.exports = Post;
