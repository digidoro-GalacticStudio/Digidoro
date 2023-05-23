const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoItemSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    theme: {
      type: String,
      trim: true,
      default: "#FFFFFF",
    },
    reminder: {
      type: Date,
    },
    is_completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("TodoItem", todoItemSchema);
