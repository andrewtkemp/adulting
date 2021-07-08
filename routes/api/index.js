const router = require("express").Router();
const activitiesRoutes = require("./activities");
const userRoutes = require("./user");

// API routes
router.use("/activites", activitiesRoutes);
router.use("/user", userRoutes);

module.exports = router;
