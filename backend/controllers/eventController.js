const Event = require("../models/Event");
const cloudinary = require("../config/cloudinary");

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ dateTime: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch events" });
  }
};

exports.createEvent = async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      const upload = await cloudinary.uploader.upload(req.file.path);
      imageUrl = upload.secure_url;
    }

    const event = await Event.create({
      title: req.body.title,
      description: req.body.description,
      dateTime: req.body.dateTime,
      location: req.body.location,
      capacity: req.body.capacity,
      image: imageUrl,
      createdBy: req.user.id,
    });

    res.status(201).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Create event failed" });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};


