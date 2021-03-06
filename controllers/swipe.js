const express = require('express');
const Redirect = require('../middlewares/redirect');
const models = require('../models');
const Op = models.Sequelize.Op;

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', Redirect.ifNotLoggedIn(), Redirect.ifNoSetUp(), Redirect.ifNoPetSetUp(), this.index);
    router.post('/', this.submit);

    return router;
  },
  index(req, res) {
/*    req.user.getProfile().then((user_profile) => {
      models.Profile.findAll({
        include: [{model: models.User}],
        where: {
          zipCode: user_profile.zipCode,
          userId: {[Op.ne]:req.user.id},
        }
      }).then((local_users) =>{
        res.render('swipe', { user: req.user,  local_users, success: req.flash('success') });
      }); 
    });
  },
  submit(req, res) {
    models.User.addUser(req.other_user, {through: {status: res.status}})
  },*/
  req.user.getProfile().then((user_profile) => {
      models.Profile.findAll({
        include: [{
          model: models.User
        }],
        where: {
          zipCode: user_profile.zipCode,
          userId: {[Op.ne]:req.user.id},
        }
      }).then((local_users) =>{
        res.render('swipe', { user: req.user,  local_users, success: req.flash('success') });
      }); 
    });
  },
  submit(req, res) {
    models.User.addUser(req.other_user, {through: {status: res.status}})
  },
};
