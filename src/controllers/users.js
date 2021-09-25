import model from '../models/users.js'
import jwt  from '../lib/jwt.js'

const POST = async (req, res) => {
	try {
		let newUser = await model.postUsers(req.body)
		res.json({
			status:201,
			message:'user sucesfulled register',
			token:jwt.sign(newUser.user_id),
			data: newUser
		})
	} catch(error) {
		res.json({
			status:400,
			message:error,
			token: null,
			data: null
		})
	}
}

const LOGIN = async (req, res) => {
	try {
		let user = await model.loginUser(req.body)
			if(user){
			res.json({
				status:201,
				message:'user sucesfulled login',
				token:jwt.sign(user.user_id),
				data: user
			})
	    }else throw new Error('wrong password or email')
	} catch(error) {
		res.json({
			status:400,
			message:error.message,
			token: null,
			data: null
		})
	}
}

const GET = async (req, res) => {
	try {
		let users = await model.getUser(req.body)
		res.json(users)
	} catch(error) {
		res.json({
			status:400,
			message:error.message,
			token: null,
			data: null
		})
	}
}


export default {
	POST,
	LOGIN,
	GET
}