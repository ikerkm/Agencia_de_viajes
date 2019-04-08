const fetchServer = () => {

    return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, {
            data: [1, 2, 3, 4]
        });
    })

}

fetchServer().then(res => {
    console.log(res);
});


const pruebas = async () => {

    const inicio = Date.now();
    fetchServer().then(res => {
        console.log(res);
        console.log(Date.now() - inicio);
    })


}