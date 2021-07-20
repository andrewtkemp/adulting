const router = require('express').Router();
const activitiesController = require("../../controllers/activitiesController");
const { Activities } = require('../../models');
const { User } = require('../../models');


// Matches with "/api/activities"
router.route("/")
  .get(activitiesController.findAll)
  .post(activitiesController.create);

// Matches with "/api/activities/:id"
router
  .route("/:id")
  .get(activitiesController.findById)
  .put(activitiesController.update)
  .delete(activitiesController.remove);

module.exports = router;

  
route.get("/log")
Activities.findOne({})

router.post('/log', (req, res) => {
  Activities.findOne({}).
  populate(User)

});

route.post("/log")






















