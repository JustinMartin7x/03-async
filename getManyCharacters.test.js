const { getManyCharacters } = require('./getManyCharacters.js')
const fetch = require('node-fetch')

// jest.mock('node-fetch')



describe('getChar', () => {


    it('should return mulitple character when given an id', async () => {
        // fetch.mockResolvedValue({
        //     json: () => Promise.resolve({
        //         id: 1,
        //         name: "Rick Sanchez",
        //         status: "Alive",
        //         species: "Human",
        //         type: "",
        //         gender: "Male",
        //     })
        // })

        const res = await getManyCharacters([1, 3, 5, 7])


        expect(res)
            .toEqual([
                { name: 'Rick Sanchez', species: 'Human', status: 'Alive' },
                { name: 'Summer Smith', species: 'Human', status: 'Alive' },
                { name: 'Jerry Smith', species: 'Human', status: 'Alive' },
                { name: 'Abradolf Lincler', species: 'Human', status: 'unknown' }]);

    })
});