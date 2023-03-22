import mongoose  from "mongoose";
import bcrypt from 'bcrypt'

// destructuring
const {Schema, model} = mongoose

const userSchema = new Schema({
	firstname : {
		type : String,
		required : true,
		trim : true
	},
	lastname : {
		type : String,
		required : true,
		trim : true
	},
	username : {
		type : String,
		required : true,
		trim : true, 
		unique : true
	},
	email : {
		type : String,
		required : true,
		trim : true, 
		unique : true
	},
	phone : {
		type : String,
		required : true,
		unique : true
	},
	password : {
		type : String,
		required : true,
		trim : true, 
	}

},{timestamp : true})

// mongoose middleWare

// hashing password
userSchema.pre('save', async function(next){
	this.password = await bcrypt.hash(this.password, 12)
	next()
})


export const user_DB = model('record', userSchema)
