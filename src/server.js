import express from 'express'
import usersRouter from './routes/users.js'
import newsRouter from './routes/news.js'
import categorieRouter from './routes/categories.js'
const app = express()

app.use( express.json() )
app.use ( usersRouter )
app.use ( newsRouter )
app.use ( categorieRouter )


app.use( (error, req, res, next) => {
	return res.status(400).json({
		status: 400,
		message: error.message
	})
} )

app.listen(process.env.PORT || 8080,()=> console.log('http://localhost:8080'))