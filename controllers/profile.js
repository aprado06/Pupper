const express = require('express');
const Redirect = require('../middlewares/redirect');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', Redirect.ifNotLoggedIn('/login'), Redirect.ifNotLoggedInNoPet('/pet-set-up'), this.index);

    return router;
  },
  index(req, res) {
    models.Profile.findById(req.user.profileId)
      .then((p) => {
        res.render('profile', { user: req.user, profile: p, success: req.flash('success') });
      });
  },
};
