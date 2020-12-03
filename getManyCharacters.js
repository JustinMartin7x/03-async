const fetch = require('node-fetch')
const URL = 'https://rickandmortyapi.com/api/character'

getManyCharacters = (arr) => {
    Promise.all(
        arr.forEach(item =>
            fetch(`${URL}/${item}`)
                .then(res => res.json())
                .then(({ name, status, species }) => {
                    return {
                        name,
                        status,
                        species
                    }
                })
        )
    )
}
module.exports = {
    getManyCharacters
}

