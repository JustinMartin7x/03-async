const fsPromise = require('fs').promises;
const { promises } = require('fs');
const fetch = require('node-fetch')
const URL = 'https://rickandmortyapi.com/api/character?'

getCharacter = (id) => {
    fetch(`${URL}/${id}`)
        .then(({ body }) => {
            return { name: body.name, status: body.status, species: body.species }
        })
}
module.exports = {
    getCharacter
}