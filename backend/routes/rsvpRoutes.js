const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { joinEvent, leaveEvent } = require("../controllers/rsvpController");

router.post("/:id/join", auth, joinEvent);
router.post("/:id/leave", auth, leaveEvent);

module.exports = router;
