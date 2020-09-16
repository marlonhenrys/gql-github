const mining = require('./src/mining')

/** 
 * The requests are paginated with 10 elements per page.
 * 
 * Mining parameters:
 * 1. Total pages (maximum): integer
 * 2. Current page (initial) : integer
 * 3. Cursor (initial) : string
 * 4. Debug (optional) : boolean
 */

mining(100, 1, null)

/**
 * Instructions for running:
 * 1. Use the 'yarn' or 'npm install' commands to download the dependencies.
 * 2. Go to src/config/request.js and insert your GitHub token in place of 'YOUR_TOKEN'.
 * 3. Use the 'yarn start' or 'npm start' commands to start mining.
 */
