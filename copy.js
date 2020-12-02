const fsPromise = require('fs').promises;

fsPromise.readFile('./nano.txt', 'utf-8')
    .then(res => {
        return fsPromise.writeFile('./nano1.txt', res, 'utf-8')

    })
    .then(res => {
        return console.log('yay im done')
    })

