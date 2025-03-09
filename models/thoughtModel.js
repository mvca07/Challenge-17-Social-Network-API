const { Schema, model, default: mongoose } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: mongoose.Types.ObjectId,
    default: new mongoose.Types.ObjectId,
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (value) {
      return value.toLocaleString();
    },
  },
});

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function (value) {
      return value.toLocaleString();
    },
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema]
});

reactionSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model("thought", thoughtSchema);

module.exports = Thought;
