const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({
  origin: "https://evnet-platform-fkfd-git-main-chaitanya790s-projects.vercel.app",
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/events", require("./routes/eventRoutes"));
app.use("/api/rsvp", require("./routes/rsvpRoutes"));

module.exports = app;
