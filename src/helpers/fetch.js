const axios = require('axios')
const queryBuilder = require('../utils/queryBuilder')
const { endpoint, options, variables } = require('../config/request')

module.exports = async ({ currentPage, totalPages, perPage, cursor }) => {

    const next = cursor ? `"${cursor}"` : null
    const query = queryBuilder(perPage, next)

    console.log('\nBuscando dados... ' + `Progresso: ${currentPage}/${totalPages}`)

    const response = await axios.post(endpoint, { query, variables }, options)
    const { nodes, pageInfo } = response.data.data.search

    return { nodes, pageInfo }
}