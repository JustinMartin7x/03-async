const { getCharacter } = require('./getCharacter.js')




describe('getcharacter', () => {


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