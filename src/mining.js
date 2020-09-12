const fetch = require('./helpers/fetch')
const format = require('./helpers/format')
const toFile = require('./helpers/toFile')
const { red, green, magenta } = require('./config/console')

module.exports = async (totalPages, currentPage, cursor) => {
    while (currentPage <= totalPages) {
        const repos = new Array()

        try {
            console.log('\nBuscando dados... ' + `Progresso: ${currentPage}/${totalPages}`)
            const { nodes, pageInfo } = await fetch(cursor)

            repos.push(...nodes)

            const nodesFormat = format(repos)
            await toFile(nodesFormat)

            console.log(green, '\nDados coletados.')

            cursor = pageInfo.endCursor || null
            currentPage++

            console.log(magenta, '\nEnd Cursor: ' + cursor)
        } catch (error) {
            console.log(red, 'Error: ' + error.message)
            console.log('\nTentando novamente...')
        }
    }
    console.log('\nColeta de dados finalizada!\n')
}