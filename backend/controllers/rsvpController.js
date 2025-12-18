const mongoose = require("mongoose");
const Event = require("../models/Event");
const RSVP = require("../models/RSVP");

exports.joinEvent = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const event = await Event.findById(req.params.id).session(session);

    if (event.currentAttendees >= event.capacity)
      throw new Error("Event full");

    await RSVP.create([{ user: req.user.id, event: event._id }], { session });

    event.currentAttendees += 1;
    await event.save({ session });

    await session.commitTransaction();
    res.json({ message: "RSVP successful" });
  } catch (err) {
    await session.abortTransaction();
    res.status(400).json({ message: err.message });
  } finally {
    session.endSession();
  }
};

exports.leaveEvent = async (req, res) => {
  const rsvp = await RSVP.findOneAndDelete({
    user: req.user.id,
    event: req.params.id
  });

  if (rsvp) {
    await Event.findByIdAndUpdate(req.params.id, {
      $inc: { currentAttendees: -1 }
    });
  }

  res.json({ message: "RSVP removed" });
};
