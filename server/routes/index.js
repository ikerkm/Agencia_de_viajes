//Crea rutas para usarlas con express
const router = require('express').Router();
const User = require('../models/User');
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: true
}));
router.get('/', (req, res) => {

    res.send(process.env.NODE_ENV)

})

router.post('/users', (req, res) => {
    console.log(req.body);
    new User(req.body).save().then(user => {

        const name = req.body.name;
        const register_ended = 1;
        res.render('template.hbs', {
            register_ended,
            name,

        });


    }).catch(err => {
        res.status(400).send(err);
    })


});




router.get('/users', (req, res) => {
    User.find({}).then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send(err);
    })

});

router.get('/users/:user_id', (req, res) => {

    console.log(req);
    User.findById(req.params.user_id).then(users => {

        res.send(users);


    }).catch(err => {
        res.status(500).send(err);
    })

});
router.delete('/users/:user_id', (req, res) => {
    console.log(req.params.user_id);
    User.findByIdAndDelete(req.params.user_id).then(users => {

        res.send(users);


    }).catch(err => {
        res.status(500).send(err);
    })

});

router.patch('/users/:user_id', (req, res) => {
    User.findByIdAndUpdate(
        req.params.user_id, {
            ...req.body
        }, {
            new: true,
            runValidators: true
        }).then(User => {
        res.send(User);
    }).catch(err => {
        res.status(400).send(err);

    });
})


router.post('/users/auth', async (req, res) => {
    try {
        console.log(req.body);

        const user = await User.findByCredentials(req.body);
        console.log(user);
        if (!user) {
            return res.status(401).send('Wrong credentials');
        } else {

        }
        res.send(user);
    } catch (err) {
        res.status(401).send(err);
    }


})

module.exports = router;