require('./config') //definimos el entorno de ejecucion lo primero

const express = require('express');
const hbs = require('hbs');
hbs.registerPartials(`${__dirname}/views/partials`);
const hbsUtils = require('hbs-utils')(hbs);
hbsUtils.registerPartials(`${__dirname}/views/partials`);
hbsUtils.registerWatchedPartials(`${__dirname}/views/partials`);
//Llamar a la ruta
const router = require('./routes')

const app = express();
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.json());

/*
__filename => ruta desde / hasta el archivo actual.
__dirname => ruta desde / hasta la carpeta del archivo.



*/
app.use('/', express.static(`${__dirname}/public`));
app.use(router);

app.get('/hbs', (req, res) => {
    res.render('pruebas.hbs', {
        tittle: 'pruebas',
        users: [{
                id: 1,
                name: 'Nombre1'
            }, {
                id: 2,
                name: 'Nombre2'
            },
            {
                id: 3,
                name: 'Nombre3'
            },


        ],
        admin: {
            name: 'iker',
            fullname: 'iker kuadra'
        },
        layout: 'template'
    });
});


app.get('/inicio', (req, res) => {

    const state = 1;


    res.render('template.hbs', {
        state: state,


    });


});

app.get('/register', (req, res) => {


    const register = 1;

    res.render('template.hbs', {
        register: register,


    });


});

app.get('/login', (req, res) => {


    const login = 1;

    res.render('template.hbs', {
        login,


    });


});
//configuramos el port en environment.js para que lo elija dependiendo del entorno
const port = process.env.port || 3000;

//const fs = require('fs'); // modulo del core de node


//console.log(process.env.NODE_ENV);






//abrimos servidor en puerto
app.listen(port, () => console.log('Servidor levantado en: http://localhost:' + port));
//app.listen(port, () => console.log(`http://localhost:$(port)/`); 