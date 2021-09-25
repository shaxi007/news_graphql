import {fetch, fetchAll } from '../lib/postgres.js'
import  Joi from 'joi'
import md5 from 'md5'

const INESERT_USERS = `
	INSERT INTO users(first_name,last_name,email,password,specialist) VALUES($1,$2,$3,$4,$5)
	RETURNING *
`
const LOGIN_USER = ` 
	SELECT * FROM users WHERE email=$1 AND password=$2
`
const USERS = ` 
	SELECT * FROM users 
`


const postUsers = ({first_name,last_name,email,password,specialist}) => {
	try {
		let newUser = {first_name,last_name,email,password,specialist}
		const user = Joi.object({
		    first_name: Joi.string()
		        .alphanum()
		        .min(3)
		        .max(30)
		        .required(),
		    last_name: Joi.string()
		        .alphanum()
		        .min(3)
		        .max(30),
		    specialist: Joi.string()
		        .alphanum()
		        .min(3)
		        .max(30)
		        .required(),
		    password: Joi.string()
		        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
		        .min(8)
		        .max(30)
		        .required(),
		    email: Joi.string()
		        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
		        .required()
		})
		let { error } = user.validate(newUser)
		if (error) throw error
		return fetch(INESERT_USERS,first_name,last_name,email,md5(password),specialist)
	} catch(e) {
		throw e
	}
}

const loginUser =async  ({ email,password })=>{
	try {
		password = await md5(password)
		return fetch(LOGIN_USER,email,password)
	} catch(e) {
		throw e
	}
}
const getUser =async  ()=>{
	try {
		return fetchAll(USERS)
	} catch(e) {
		throw e
	}
}

export default {
	postUsers,
	loginUser,
	getUser
}