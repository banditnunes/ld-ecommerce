const express = require('express')
const path = require('path')

const app = express()
const env = process.env.NODE_ENV || 'dev'
const envDir = path.join(__dirname, `./src/configs/env/${env}`)

require(envDir)(app)


app.listen(app.get('port'), () => {
	console.log('Express server iniciado...')
})