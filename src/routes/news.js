import express from 'express'
import controller from '../controllers/news.js'

const router = express.Router()

router
	  .post('/news',controller.POST_NEWS)
	  .delete('/news',controller.DELETE)
	  .put('/news',controller.PUT_NEWS)
	  .get('/news',controller.GET_NEWS)

export default router