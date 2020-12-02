const fsPromise = require('fs').promises

// 'create and export a transform(src) function
// require const fsPromises = require('fs').promises;
// use fsPromises.readFile to read a file
// then remove all capital letters
// then make all letters capital
// then reverse the string'

transformer = (dst) => {
    try {
        fsPromise.readFile('./nano.txt', 'utf-8')
            .then(res => {
                return fsPromise.writeFile(dst, res.toUpperCase(), 'utf-8')
            })
        return fsPromise.readFile(dst, 'utf-8')
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    transformer
}