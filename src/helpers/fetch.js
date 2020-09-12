const axios = require('axios')
const queryBuilder = require('../utils/queryBuilder')
const { endpoint, options, variables } = require('../config/request')

module.exports = async cursor => {
    const after = cursor ? `, after: "${cursor}"` : ''
    const query = queryBuilder(after)

    const response = await axios.post(endpoint, { query, variables }, options)
    const { nodes, pageInfo } = response.data.data.search

    return { nodes, pageInfo }
}