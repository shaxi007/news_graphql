import {fetch, fetchAll } from '../lib/postgres.js'


let INSERT_CATEGORIE = ` 
	INSERT INTO categories(categorie_name,languag_id) VALUES($1,$2)
	RETURNING *
`
let UPDATE_CATEGORIE = ` 
	UPDATE categories SET categorie_name=$1 WHERE categorie_id=$2
	RETURNING *
`
let DELETE_CATEGORIE = ` 
	DELETE FROM categories WHERE categorie_id=$1
	RETURNING *
`
let SELECT_CATEGORIE = ` 
	SELECT * FROM categories WHERE CASE WHEN $1>0 THEN languag_id=$1 ELSE TRUE END 
`

const addCategrie =async  ({ languag_id,categorie_name })=>{
	try {
		return fetch(INSERT_CATEGORIE,categorie_name,languag_id)
	} catch(e) {
		throw e
	}
}
const putCategrie =async  ({ categorie_name,categorie_id })=>{
	try {
		return fetch(UPDATE_CATEGORIE,categorie_name,categorie_id)
	} catch(e) {
		throw e
	}
}
const deleteCategrie =async  ({ categorie_id })=>{
	try {
		return fetch(DELETE_CATEGORIE,categorie_id)
	} catch(e) {
		throw e
	}
}

const getCategorie =async ({lang=0})=>{
	try {
		return fetchAll(SELECT_CATEGORIE,lang)
	} catch(e) {
		throw e
	}
}

export default {
	addCategrie,
	putCategrie,
	deleteCategrie,
	getCategorie
}