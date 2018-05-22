const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
      type: String,
      required: true
    },
    header: {
        type: String,
        required: true
    },
    description: {
          type: String,
          required: true
      },
    needed: {
        type: Number,
        required: true
    },
    publicKey: {
      type: String,
      required: true
    },
    time: {
      type:Date,
      default:Date.now
    }
});




module.exports = mongoose.model('Post', PostSchema);
