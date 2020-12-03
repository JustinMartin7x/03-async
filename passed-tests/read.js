

const fsPromise = require('fs').promises;


fsPromise.readFile('./nano.txt', 'utf-8')
    .then(res => {
        console.log(res)
    })
