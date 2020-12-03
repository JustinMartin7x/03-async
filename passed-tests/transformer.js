const { writeFile } = require('fs');

const fsPromise = require('fs').promises

// 'create and export a transform(src) function
// require const fsPromises = require('fs').promises;
// use fsPromises.readFile to read a file
// then remove all capital letters
// then make all letters capital
// then reverse the string'

reverseString = (str) => {
    return str.split("").reverse().join("").toUpperCase()
}
removeCaps = (str) => {
    return str.replace(/[^a-z]/g, '');
}

transformer = (src) => {
    return fsPromise.readFile(src, 'utf-8')
        .then(res => {
            return removeCaps(res);
        })
        .then(res => {
            return reverseString(res)
        })
        .then(res => {
            return fsPromise.writeFile(src, res, "utf-8")
        })
}
module.exports = {
    transformer
}