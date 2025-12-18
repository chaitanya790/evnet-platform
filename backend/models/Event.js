const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  dateTime: Date,
  location: String,
  capacity: Number,
  image: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  currentAttendees: { type: Number, default: 0 }
});

module.exports = mongoose.model("Event", eventSchema);
