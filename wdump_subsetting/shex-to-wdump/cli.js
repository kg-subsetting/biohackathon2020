#!/usr/bin/env node

/*
*/

const stw = require('./index.js')
stw.main(process.argv).then(retCode => process.exit(retCode))

