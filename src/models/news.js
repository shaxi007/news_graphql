import {fetch, fetchAll } from '../lib/postgres.js'


let INSERT_NEWS = ` 
	INSERT INTO news(news_title,news_body,author_id,categorie_id,languag_id) VALUES($1,$2,$3,$4,$5)
	RETURNING *
`

let DELETE_NEWS = ` 
	DELETE FROM news WHERE news_id = $1 
	RETURNING *
`
let GET_NEWS = ` 
		SELECT * FROM news 
	
`

let UPDATE_NEWS = ` 
	WITH old_data AS (
		SELECT * FROM news
	)
	UPDATE news SET 
	news_views= CASE 
					WHEN $5 THEN old_data.news_views+1
					ELSE old_data.news_views
				END,
	news_title = CASE 
					WHEN length($2)>1 THEN $2
					ELSE old_data.news_title
				END,
	news_body = CASE 
					WHEN length($3)>1 THEN $3
					ELSE old_data.news_body
				END,
	author_id = CASE 
					WHEN $4>0 THEN $4+1
					ELSE old_data.author_id
				END
	FROM old_data
	WHERE news.news_id=$1
	RETURNING news.*;
`


const addNews =async  ({ news_title,news_body,author_id,categorie_id,languag_id })=>{
	try {
		return fetch(INSERT_NEWS,news_title,news_body,author_id,categorie_id,languag_id)
	} catch(e) {
		throw e
	}
}


const deleteNews =async  ({ news_id })=>{
	try {
		return fetch(DELETE_NEWS,news_id)
	} catch(e) {
		throw e
	}
}

const updateNews =async  ({ news_id=0,news_title='',news_body='',news_author=0,option })=>{
	try {
		return fetch(UPDATE_NEWS,news_id,news_title,news_body,news_author,option)
	} catch(e) {
		throw e
	}
}

const getNews =async  ()=>{
	try {
		return fetchAll(GET_NEWS)
	} catch(e) {
		throw e
	}
}

export default {
	deleteNews,
	addNews,
	updateNews,
	getNews
}