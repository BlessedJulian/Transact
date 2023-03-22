export const appError = class appError extends Error{
	constructor(statusCode, message){
		super(message)
		this.statusCode = statusCode

	}
}