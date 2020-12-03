const fetch = require('node-fetch')
const { getCharacter } = require('./getCharacter')
const URL = 'https://rickandmortyapi.com/api/character'

const getManyCharacters = (arr) => {
    return Promise.all(arr.map(id => getCharacter(id)))

}


module.exports = {
    getManyCharacters
}

