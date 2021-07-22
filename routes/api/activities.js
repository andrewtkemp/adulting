const router = require('express').Router();
const activitiesController = require("../../controllers/activitiesController");
const  Activities = require('../../models/Activities');

// router.post("/activities", ({ body }, res) => {
//   Activities.create(body)
//     .then(dbActivities => {
//       res.json(dbActivities);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post('/activities', (req, res) => {
//   console.log(req.body)  
//   Activities.create(req.body)
//     .then((dbActivities) => {
//       res.json(dbActivities);
//     })
//     .catch((err) => {
//       res.json(err);
//     });
// });

// router.get("/activities", (req, res) => {
//   Activities.find({})
//     .sort({ date: -1 })
//     .then(dbActivities => {
//       res.json(dbActivities);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });












// Matches with "/api/activities"
router.route("/")
  .get(activitiesController.findAll)
  // .post(activitiesController.create);

// Matches with "/api/activities/:id"
router
  .route("/:id")
  .get(activitiesController.findById)
  .put(activitiesController.update)
  .delete(activitiesController.remove);

module.exports = router;

  























