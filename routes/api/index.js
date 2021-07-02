const router = require("express").Router();
const bookRoutes = require("./activities");
const userRoutes = require("./user");

// Book routes
router.use("/activites", activitiesRoutes);
router.use("/user", userRoutes);

module.exports = router;
