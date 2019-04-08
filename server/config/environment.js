//console.log(process.env.NODE_ENV);
//creamos todas las variables del entorno

const enviroments = {

    production: "production",
    development: "development",
    test: "test"
}

const ENV = process.env.NODE_ENV || enviroments.development;
//comprueba lo que recibimos en ENV
//console.log(ENV);



const config = {
    [enviroments.production]: {
        port: 80,
        MongoDB: {
            port: 27017,
            host: 'localhost',
            DB: 'clase_valencia'
        }

    },
    [enviroments.development]: {
        port: 3002,
        MongoDB: {

            port: 27017,
            host: 'localhost',
            DB: 'clase_valencia_dev'

        }
    },

    [enviroments.test]: {

        port: 3001,
        MongoDB: {


            port: 27017,
            host: 'localhost',
            DB: 'clase_valencia_test'

        }
    }
}


//comprueba el entorno
//console.log(config[ENV]);  


const CONFIG = config[ENV];

//comprobamos que existe confid de ENV y si no existe nos de un error
if (!CONFIG) {
    throw new Error(`NODE_ENV =${ENV} is not a valid enviroment.`)
}

//console.log(config[ENV]);  


//console.log(process.env);

process.env = {
    ...process.env,
    ...CONFIG
};

//console.log(process.env.MongoDB);