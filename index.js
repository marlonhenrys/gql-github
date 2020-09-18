const standard = require('./src/config/params')
const mining = require('./src/mining')
const argv = require('minimist')

const args = argv(process.argv.slice(2))

const params = {
    totalPages: args.m || standard.totalPages,
    perPage: args.l || standard.perPage,
    currentPage: args.i || standard.currentPage,
    cursor: args.c || standard.cursor,
    filename: args.f || standard.filename,
    debug: args.debug || standard.debug
}

mining(params)
