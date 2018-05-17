const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    header: {
        type: String,
        required: true
    },
    description: {
          type: String,
          required: true
      },
    needed: {
        type: String,
        required: true
    }
});




module.exports = mongoose.model('Post', PostSchema);
