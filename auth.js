var passport = require('passport'),
    localStrategy= require('passport-local').Strategy;

passport.use(new localStrategy(
        function(username, password, done){
            if (username === 'admin' && password === 'pass'){
                return done(null, {username: 'admin'});
            }
            
            return done(null, false);
        }
));

passport.serializeUser(function(user, done){
    done(null, user.username);
});

passport.deserializeUser(function(username, done){
    done(null, {username: username});
});

module.export = passport;