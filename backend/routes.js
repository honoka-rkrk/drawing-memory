'use strict';
var configRoutes;

configRoutes = function(app, server, passport) {
    app.get('/secret', function(request, response) {
        // 認証保護
        if(passport.session && passport.session.id){
                response.send("ok");
        } else {
            response.redirect('/');
        }   
    });

    // passport-twitter ----->
    // http://passportjs.org/guide/twitter/
    app.get('/auth/twitter', passport.authenticate('twitter'));
    app.get('/auth/twitter/callback', 
        passport.authenticate('twitter', { successRedirect: '/',
                                                failureRedirect: '/' }));
    // <-----
}

module.exports = {configRoutes: configRoutes};