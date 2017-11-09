const express = require('express');
const Redirect = require('../middlewares/redirect');
const multer = require('multer');

const upload = multer({
  dest: './public/profile_img/',
});

module.exports = {
  registerRouter() {
    const router = express.Router();

<<<<<<< HEAD
    router.get('/', Redirect.ifNotLoggedIn(), Redirect.ifNoSetUp(), this.index);
=======
    router.get('/', Redirect.ifNotLoggedIn(), Redirect.ifNoSetUp(),this.index);
>>>>>>> 40549d4bf339d15a3e29e6deeb59578fd38a9fad
    router.post('/', upload.single('profileImage'), this.create);
    return router;
  },
  index(req, res) {
    res.render('pet-set-up');
  },
  create(req, res) {
    req.user.createPet({
      bio: req.body.bio,
      birthday: req.body.birthday,
      hobbies: req.body.hobbies,
      profileImage: (req.file) ? req.file.filename : 'default',
    })
      .then(() => {
        res.redirect('/profile');
      })
      .catch(() => {
        res.render('pet-set-up', { error: true });
      });
  },
};
