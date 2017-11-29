const express = require('express');
const Redirect = require('../middlewares/redirect');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', Redirect.ifNotLoggedIn(), Redirect.ifNoSetUp(), Redirect.ifNoPetSetUp(), this.index);

    return router;
  },
  index(req, res) {
    req.user.getProfile()
    .then((profile) => {
      req.user.getPets()
      .then((pets) =>{
        res.render('profile', { user: req.user, profile: profile, pets, success: req.flash('success')});
      });
    });
  },
};

