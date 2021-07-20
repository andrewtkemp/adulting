const router = require("express").Router();
const activitiesRoutes = require("./activities");
const userRoutes = require("./user");
const logRoutes = require("./log");

// API routes
router.use("/activities", activitiesRoutes);
router.use("/user", userRoutes);
router.use("/log", logRoutes);

module.exports = router;
