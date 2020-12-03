const fsPromise = require('fs').promises
const { copyFile } = require('./copyFile.js')




describe('copy file should copy one file and make a new copy file', () => {
    // afterEach(() => {
    //     return fsPromise.rm('./nano1.txt')
    // })

    it.skip('should copy a file in the directory', async () => {

        const res = await copyFile('./nano.txt', './nano1.txt')
        console.log(res)
        expect(res)
            .toEqual('hello i exist but only for a nano sec')

    });

});