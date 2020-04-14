const router = require('express').Router();
const passport = require('../../middleware/security');

router.use(passport.initialize());

router.get('/github', passport.authenticate('github'));
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), require('./github-callback.js'));

module.exports = router;