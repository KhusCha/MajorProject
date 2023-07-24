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
        
            }
    },
    {timesStamps: true});

    const Post = mongoMango.model('Post',postSchema);
    module.exports = Post;
