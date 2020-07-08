## Exercicios Aula 52

### 1.
a) o comando DROP derrubaria a coluna salary

b) mudaria o nome da tabela gender para sex

c) muda o tipo de gender de VARCHAR (6) para VARCHAR(255) assim possivel colocar até 255 caracteres nessa coluna

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### 2.
a) UPDATE Actor SET name = "Paolla Oliveira", birth_date = "1982-04-14" WHERE id="003";

b) UPDATE Actor 
Set name = "JULIANA PÃES"
WHERE name="Juliana Paes";

c)UPDATE Actor 
SET name ="Rodrigo Santoro",
	salary = 900000,
    birth_date = "1975-08-22",
    gender = "male"
WHERE id = "005";

d)UPDATE Actor
SET name="Babu Santana",
salary=300000,
birth_date = "1979-12-10",
gender ="male"
WHERE id = "008";
executou e não informou erro verificado com um SELECT não aparece está alteração na tabela mesmo dizendo que foi executado

### 3.
a)DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b)DELETE FROM Actor WHERE gender="male" AND salary > 1000000;

### 4.
a) SELECT MAX(salary) FROM Actor;

b)SELECT MIN(salary) FROM Actor
Where gender ="female";

c)SELECT COUNT(*) FROM Actor
WHERE gender="female";

d)SELECT SUM(salary) FROM Actor;

### 5.

a) a query fez a contagem da tabela Actor e trouxe a contagem dos gender , dividindo entre males e females
como na tabela tinha 5 Atores trouxe 3 males e 2 female

b)SELECT id, name FROM Actor 
ORDER BY name DESC;

c)SELECT * FROM Actor 
ORDER BY salary;

d)SELECT * FROM Actor ORDER BY salary DESC
LIMIT 3;

e)SELECT AVG(salary), gender FROM Actor
GROUP BY gender; 

### 6.
a)ALTER TABLE Movie ADD COLUMN playing_limit_date DATE DEFAULT "2020-01-01";

b)ALTER TABLE Movie CHANGE rating rating FLOAT;

c)UPDATE Movie SET playing_limit_date="2020-08-05" WHERE id="001"; 
UPDATE Movie SET playing_limit_date="2020-03-01" WHERE id="002";

d)DELETE FROM Movie WHERE id="002";
UPDATE Movie SET synopsis ="alterando a sinopse" WHERE id="002";
ele aceita a mudança mesmo não tendo mais a id 002 

### 7 
a)SELECT COUNT(*) FROM Movie WHERE playing_limit_date="2020-07-07" AND rating > 7.5;
nenhum filme só tem um em cartaz e ele o rating dele é 7

b)SELECT AVG(rating) FROM Movie;
7.666666666666667

c)SELECT Count(*) FROM Movie WHERE playing_limit_date > CURDATE();
1 filme 

d) SELECT COUNT(*) FROM Movie WHERE release_Date > CURDATE();
0 filmes

e) SELECT MAX(rating) FROM Movie;
8
f) SELECT MIN(rating) FROM Movie;
7

### 8

a) SELECT * FROM Movie ORDER BY title ASC;

b) SELECT * FROM Movie ORDER BY title DESC LIMIT 5;

c) SELECT * FROM Movie WHERE playing_limit_date > CURDATE() ORDER BY release_Date DESC;

d)SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;











