const fsPromise = require('fs').promises

copyFile = (src, dst) => {
    try {
        fsPromise.readFile(src, 'utf-8')
            .then(res => {
                return fsPromise.writeFile(dst, res, 'utf-8')
            })
        return fsPromise.readFile(dst, 'utf-8')
    } catch (err) {
        console.log(err)
    }
}
module.exports = {
    copyFile
}

