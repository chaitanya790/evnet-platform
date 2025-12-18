const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const {
  createEvent,
  getEvents,
  deleteEvent,
} = require("../controllers/eventController");

router.get("/", getEvents);
router.post("/", auth, upload.single("image"), createEvent);
router.delete("/:id", auth, deleteEvent);

module.exports = router;


