import express from 'express'
import controller from '../controllers/users.js'

const router = express.Router()

router
	  .get('/users',controller.GET)
	  .post('/register',controller.POST)
	  .post('/login',controller.LOGIN)

export default router