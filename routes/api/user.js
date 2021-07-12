const router = require('express').Router();
const User = require('../../models/User');

router.post('/', (req, res) => {
  console.log(req.body)  
  User.create(req.body)
    .then((dbUser) => {
      res.json(dbUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(
        req.params.id,
        { $push: { activities: req.body } },
        // "runValidators" will ensure new exercises meet our schema requirements
        { new: true, runValidators: true }
      )
        .then((dbWorkout) => {
          res.json(dbWorkout);
        })
        .catch((err) => {
          res.json(err);
        });
});

router.put('/:id/:activityId', async (req, res) => {
    const response = await User.findOne({ "_id" : req.params.id});
    const act = await response.activities.map((a) => {
      console.log(String(a._id) === req.params.activityId)
      if (String(a._id) === req.params.activityId) {
        a.completed = req.body.completed;
        return a;
      } else {
        return a;
      }
    });
    const updatedUser = await User.findOneAndUpdate({_id: req.params.id}, {
      $set:{ activities:act }
    })
    res.json(updatedUser)
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;