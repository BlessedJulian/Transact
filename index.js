import express from 'express'
import {PORT, DB} from './config.js'
import helmet from 'helmet'
import { appError } from './controller/appError.js'
import { errorHandler } from './middleWare/errorHandler.js'
import {USER} from './route/userRoute.js'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())


// routes
app.use('/api/v2/user', USER.router)
// routes not found
app.all('*', (req, res, next) => {
	throw new appError(404, 'page not found')
	next()
})

// database connection
const {connect} = mongoose
const database = await connect(DB, console.log(`db connected......`)).catch(error => console.log({dbMsg : error.message}));



// handling global error
app.use(errorHandler)


app.listen(PORT, (error) => {
	if(error) console.log({errMsg : `error.message`})
	console.log(`App up and running on ${PORT}`)
})