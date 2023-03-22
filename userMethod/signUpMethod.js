import {tryCatch} from '../controller/tryCatch.js'

export const signUpMethod = tryCatch(
	(req, res) => {
		const {firstname, lastname, username, email, phone, password, confirmPassword } = req.body

	}
)