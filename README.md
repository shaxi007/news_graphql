BARCHASI JSON formatda



POST 
/register

first_name => string
last_name => string
email => string
password => string
specialist => string 


POST 

/login

email => string
password => string


POST 
/news

news_title => string
news_body -> string
author_id=> Int
categorie_id=> Int
languag_id=> Int


POST 
/categorie

languag_id => Int
categorie_name => string

PUT 
/categorie

categorie_id => int
categorie_name => string

DELETE
/categorie

categorie_id => int

DELETE
/news

news_id => int

GET 
/users

GET 
/categorie
/categorie?lang=2

PUT 
/news 

news_id => int
news_title => string
news_body => string
news_author => int
option => true 
