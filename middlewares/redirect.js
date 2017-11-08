const redirect = {};

redirect.ifLoggedIn = (route) =>
  (req, res, next) => (req.user ? res.redirect(route) : next());

redirect.ifNotLoggedInNoSetUp = (route = '/login') =>
  (req, res, next) => (req.user ? (req.user.getProfile() ? next() : res.redirect('/set-up')) : res.redirect(route));

redirect.ifNotLoggedInNoPet = (route = '/login') =>
  (req, res, next) => {
  	req.user.getPets()
  		.then((pets) => {
  		  	(req.user ? (req.user.getProfile() ? (pets.length ? next() : res.redirect('/pet-set-up')) : res.redirect('/set-up')) : res.redirect(route))
  		})
  	};
redirect.ifSetUpComplete = (route = '/profile') =>
  (req, res, next) => (req.user.getProfile() ? res.redirect(route) : next() );

redirect.ifNotLoggedIn = (route = '/login') =>
  (req, res, next) => (req.user ? next() : res.redirect(route));

redirect.ifNotAuthorized = (route) =>
  (req, res, next) => (req.user.username !== req.params.username ? res.redirect(route) : next());

redirect.ifNotAdmin = (route = '/profile') =>
  (req, res, next) => (req.user ? (req.user.admin ? next() : res.redirect(route)) : res.redirect(route));

module.exports = redirect;
