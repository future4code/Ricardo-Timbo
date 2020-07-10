## Exercicios Aula 54

### 1.
a) chaves estrangeiras são identificadores para outras tabelas 

b) INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ( "001" , "Bom!", 7, "004");

c) ocorreu um erro pq não conseguiu achar a chave estrangeira da da tabela movie 

d) ocorreu um erro pq não é possivel apagar esse pois ele tem uma chave estrangeira na table Rating

### 2.


a) Uma tabela com os identificadores das outras tabelas Movie e Actor

b) INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("007","005");

c) o erro informa que as chaves anto de actor como de movie não foram encontradas no caso usei os 2 ids inexistentes 

d)o erro informa que não é possivem apagar a linha pq ela possui uma chave estrangeira em outra tabela

### 3.

a) a query pede informações dos filmes que tenham Rating que no caso do ON é onde possua os identificadores nas tabelas que estão no ON


b) SELECT Movie.id AS movie_id, Movie.title AS title_movie, Rating.rate AS rating  FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;



### 4. 

a) SELECT Movie.id AS movie_id, Movie.title AS title_movie, Rating.rate AS rating  FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;

b) SELECT Movie.id, Movie.title, MovieCast.actor_id FROM Movie
RIGHT JOIN MovieCast ON MovieCast.movie_id = Movie.id;

c) SELECT AVG(Rating.rate), Movie.id, Movie.title FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id
GROUP BY (Movie.id);

## 5. 

a) está query junta as informações pertinentes das 3 tabelas actor, movie e moviecast, a tabela MovieCast serve como a que serve para juntar as 3

b) 

