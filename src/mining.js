const fetch = require('./helpers/fetch')
const format = require('./helpers/format')
const toFile = require('./helpers/toFile')
const { red, green, magenta } = require('./config/console')

module.exports = async (totalPages, currentPage, cursor, debug) => {

    while (currentPage <= totalPages) {

        try {
            console.log('\nBuscando dados... ' + `Progresso: ${currentPage}/${totalPages}`)
            const { nodes, pageInfo } = await fetch(cursor)

            const formattedNodes = format(nodes)
            await toFile(formattedNodes)

            console.log(green, '\nDados coletados.')

            cursor = pageInfo.endCursor || null
            currentPage++

            if (debug) { console.log(magenta, '\nEnd Cursor: ' + cursor) }

        } catch (error) {
            console.log(red, error.message)
            console.log('\nTentando novamente...')
        }
    }
    console.log('\nColeta de dados finalizada!\n')
}