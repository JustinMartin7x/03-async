const { getCharacter } = require('./getCharacter.js')
const fetch = require('node-fetch')

jest.mock('node-fetch')



describe('getCharacter', () => {


    it.skip('should return a character when given an id', async () => {
        fetch.mockResolvedValue({
            json: () => Promise.resolve({
                id: 1,
                name: "Rick Sanchez",
                status: "Alive",
                species: "Human",
                type: "",
                gender: "Male",
            })
        })

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