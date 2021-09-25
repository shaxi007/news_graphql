import model from '../models/news.js'
import jwt  from '../lib/jwt.js'



const POST_NEWS = async (req, res) => {
	try {
		let cat = await model.addNews(req.body)
		if(cat){
			res.json({
				status:201,
				message:'news added',
				data: cat
			})
		}else throw new Error('error')
	} catch(error) {
		res.json({
			status:400,
			message:error.message,
			token: null,
			data: null
		})
	}
}

const DELETE = async (req, res) => {
	try {
		let cat = await model.deleteNews(req.body)
		if(cat){
			res.json({
				status:201,
				message:'news deleted',
				data: cat
			})
		}else throw new Error('error')
	} catch(error) {
		res.json({
			status:400,
			message:error.message,
			token: null,
			data: null
		})
	}
}

const PUT_NEWS = async (req, res) => {
	try {
		let cat = await model.updateNews(req.body)
		if(cat){
			res.json({
				status:201,
				message:'news updated',
				data: cat
			})
		}else throw new Error('error')
	} catch(error) {
		res.json({
			status:400,
			message:error.message,
			token: null,
			data: null
		})
	}
}

const GET_NEWS = async (req, res) => {
	try {
		let cat = await model.getNews(req.body)
		if(cat){
			res.json({
				status:201,
				message:'news updated',
				data: cat
			})
		}else throw new Error('error')
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
	POST_NEWS,
	DELETE,
	PUT_NEWS,
	GET_NEWS
}