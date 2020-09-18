const fetch = require('./helpers/fetch')
const format = require('./helpers/format')
const toFile = require('./helpers/toFile')
const { red, green, yellow, magenta } = require('./config/console')

module.exports = async params => {

    while (params.currentPage <= params.totalPages) {

        try {
            const { nodes, pageInfo } = await fetch(params)

            if (nodes != 0) {
                const formattedNodes = format(nodes)
                await toFile(formattedNodes, params.filename)
                console.log(green, '\nDados coletados.')
            }

            if (params.debug) {
                console.log(magenta, '\nEnd cursor: ' + pageInfo.endCursor)
            }

            if (pageInfo.hasNextPage) {
                params.cursor = pageInfo.endCursor
                params.currentPage++
            } else {
                console.log(yellow, '\nNão há mais dados para coletar.')
                break
            }

        } catch (error) {
            console.log(red, error.message)
            console.log('\nTentando novamente...')
        }
    }

    const ratio = parseInt((params.currentPage / params.totalPages) * 100)
    console.log(`\nColeta de dados finalizada! (${ratio}%)\n`)
}