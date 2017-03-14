//use jwt strategy
var strategy = new Strategy(params, function(payload, done) {
        //var user = users[payload.id] || null;
        console.log(payload);

        //mongodb to load users
        let username = payload.email;
        let passowrd = payload.password;

        mongodb.connect(dburl, function (err, db) {
            console.log('test mongodb');

            var collection = db.collection('users');
            collection.findOne({
                    email: username
                },

                function (err, results) {
                    console.log("mongodb results: " + JSON.stringify(results));

                    if (results != null && results.password === password) {
                        var user = results;
                        //strip off password.
                        user.password = '';
                        user.confirm_password = '';
                        return done(null, user);
                    } else {
                        return done(null, false, {message: 'Bad password'});
                    }
                }

            ); //end findOne
        }); //end connect

    }); //end strategy

passport.use(strategy);
