const router = require("express").Router();
const activitiesRoutes = require("./Activities");
const userRoutes = require("./user");
const logRoutes = require("./Log");

// API routes
// router.use("/activities", activitiesRoutes);
router.use("/user", userRoutes);
router.use("/log", logRoutes);

module.exports = router;
