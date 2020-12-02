
const { transformer } = require('./transformer.js')




describe('copy file should copy one file and make a new copy file', () => {
    // afterEach(() => {
    //     return fsPromise.rm('./nano1.txt')
    // })

    it.only('should copy a file in the directory', async () => {

        const res = await transformer('./nano.txt')
        console.log(res)
        expect(res)
            .toEqual('HELLO I EXIST BUT ONLY FOR A NANO SEC')

    });

});