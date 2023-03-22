import express from "express";
import { signUpMethod } from "../userMethod/signUpMethod.js";

const router = express.Router()

router
.post('/signUp', signUpMethod )


export const USER = {
	router
}
