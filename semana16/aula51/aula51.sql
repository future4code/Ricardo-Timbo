USE julian_ricardo_timbo_db;


CREATE TABLE Actor (
	id VARCHAR (255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES; 
SHOW TABLES;
DESCRIBE Actor;

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Maria aparecida",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

SELECT id, name, salary, birth_date, gender  from Actor WHERE gender = "female";

SELECT name, salary  from Actor WHERE name = "Tony Ramos";

SELECT id, name, salary, birth_date, gender  from Actor WHERE gender = "invalid";

SELECT id, name, salary from Actor WHERE salary <= 500000;

SELECT id, nome from Actor WHERE id = "002";
SELECT id, name from Actor WHERE id = "002";


SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE (name NOT LIKE "A%" AND salary > 350000);

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");

SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

CREATE TABLE Movie (
	id VARCHAR (255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02",
  8
);
INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
  "004",
  "O Auto da Compadecida",
  "O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.",
  "2000-09-10",
  9
);

SELECT id, title, rating FROM Movie WHERE id ="004";

SELECT * FROM Movie 
WHERE title = "Doce de mãe";

SELECT id, title, synopsis FROM Movie 
WHERE rating > 7;

SELECT * FROM Movie
WHERE (title LIKE "%vida%");

SELECT * FROM Movie
WHERE title LIKE "%Dona%" OR synopsis LIKE "%Dona%";

SELECT * FROM Movie
WHERE release_date < "2020-07-06";

SELECT * FROM Movie
WHERE release_date < "2020-07-06" AND (title LIKE "%Dona%" OR synopsis LIKE "%Dona%") AND rating > 7 
	  
