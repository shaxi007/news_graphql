import express from 'express'
import controller from '../controllers/categories.js'

const router = express.Router()

router
	  .post('/categorie',controller.POST)
	  .put('/categorie',controller.PUT)
	  .delete('/categorie',controller.DELETE)
	  .get('/categorie',controller.GET)

export default router