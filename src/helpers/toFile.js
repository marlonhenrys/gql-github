const ObjectsToCsv = require('objects-to-csv')
const { blue } = require('../config/console')

module.exports = async (list, filename) => {
    console.log(blue, 'Salvando no arquivo...')

    const csv = new ObjectsToCsv(list)

    await csv.toDisk(`./files/${filename}.csv`, { append: true })
}