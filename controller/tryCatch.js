export const  tryCatch = (controller) => (req, res, next) =>{
	try {
		
		controller(req, res)

	} catch (error) {

		next(error)
		
	}
}