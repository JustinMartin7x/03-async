const fsPromise = require('fs').promises
const { transformer } = require('./transformer.js')




describe('trasformer', () => {
    it.skip('should lowercase then uppercase then reverse', () => {
        return transformer('./nano.txt')
            .then(() => {
                return fsPromise.readFile('./nano.txt', 'utf-8')
            })
            .then(res => {
                expect(res).toEqual('OLLE');
            })
    });
});