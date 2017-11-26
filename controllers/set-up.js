const express = require('express');
const Redirect = require('../middlewares/redirect');
const multer = require('multer');

const upload = multer({
  dest: './public/profile_img/',
});

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', Redirect.ifNotLoggedIn('/sign-up'), Redirect.ifSetUpComplete(), this.index);
    router.post('/', upload.single('profileImage'), this.create);
    return router;
  },
  index(req, res) {
    res.render('set-up');
  },
  create(req, res) {
    req.user.createProfile({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      bio: req.body.bio,
      birthday: req.body.birthday,
      hobbies: req.body.hobbies,
      zipCode: req.body.zipCode,
      profileImage: (req.file) ? req.file.filename : 'default',
    })
      .then(() => {
        res.redirect('/pet-set-up');
      })
      .catch(() => {
        res.render('set-up', { error: true });
      });
  },
};
