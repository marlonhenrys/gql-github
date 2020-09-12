const ObjectsToCsv = require('objects-to-csv')
const { blue } = require('../config/console')

module.exports = async list => {
    console.log(blue, 'Salvando no arquivo...')

    const csv = new ObjectsToCsv(list)

    await csv.toDisk('./result.csv', { append: true })
}