const fsPromise = require('fs').promises;


fsPromise.writeFile('./nano.txt', 'hello i exist but only for a nano sec', 'utf-8')
    .then(res => {
        return console.log('yay im done')
    })