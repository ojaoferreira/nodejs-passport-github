const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const keys = require('../config/keys.json');

passport.use(new GitHubStrategy({
    clientID: process.env.CLIENTID || keys.clientID,
    clientSecret: process.env.CLIENTSECRET || keys.clientSecret,
    callbackURL: process.env.CALLBACKURL || keys.callbackURL,
},
(accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
}
));

passport.serializeUser(function(user, cb) {
    cb(null, user);
});
  
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;