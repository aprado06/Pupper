const express = require('express');
const models = require('../models');
const Redirect = require('../middlewares/redirect');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', Redirect.ifLoggedIn('/profile'), this.index);
    router.post('/', this.submit);

    return router;
  },
  index(req, res) {
    res.render('sign-up', {onSignUpPage: true});
  },
  submit(req, res) {
    models.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      admin: false,
    }).then((user) => {
      req.login(user, () =>
        res.redirect('/set-up')
      );
    }).catch(() => {
      res.render('sign-up',{ error: true});
    });
  },
};
