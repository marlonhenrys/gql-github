require('dotenv').config()

module.exports = {
    endpoint: 'https://api.github.com/graphql',
    options: {
        headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
        }
    },
    variables: {}
}