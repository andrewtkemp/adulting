const router = require("express").Router();
const activitiesController = require("../../controllers/activitesController");

// Matches with "/api/books"
router.route("/")
  .get(activitiesController.findAll)
  .post(activitesController.create);

// Matches with "/api/activities/:id"
router
  .route("/:id")
  .get(activitiesController.findById)
  .put(activitiesController.update)
  .delete(activitiesController.remove);

module.exports = router;
