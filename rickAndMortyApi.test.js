const { getCharacter } = require('./getCharacter.js')
const fetch = require('node-fetch')




describe('getCharacter', () => {


    it('should return a character when given an id', async () => {
        const res = await getCharacter(1)

        expect(res)
            .toEqual({
                name: "Rick Sanchez",
                status: "Alive",
                species: "Human"
            }
            );

    })
});