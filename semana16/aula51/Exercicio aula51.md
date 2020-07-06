USE julian_ricardo_timbo_db;

### 1

CREATE TABLE Actor (
	id VARCHAR (255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

##### a) varchar para representar as strings, primary key é a chave primaria que diferencia os elementos da tabela
##### not null significa que o valor neste campo não pode ser nulo, Date significa que neste campo deve ser apenas dadtas,
##### (6) significa que a string pode ter no maximo 6 elementos
##### b) show databases mostrou as databases existentes, o show tables mostrou as tabelas existentes( a que acabei de criar) 
SHOW DATABASES; 
SHOW TABLES;

##### c) show Actor da erro de syntax, Describe Actor mostra os detalhes da tabela como os tipos 
DESCRIBE Actor;

### 2 
 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

##### a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

##### b) erro de duplicidade de Primary KEY(nformando que já exist um id 002), primary keys são unicas por isso o erro 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Maria aparecida",
  1200000,
  "1963-08-23", 
  "female"
);

##### c)  erro de parametros como na tabela foi informado apenas 3 campos mas em valores foi passado os 5

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

##### d) erro informando que a coluna name não pode ser default ou no caso null( pois definimos como not null)

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

##### e) erro na coluna birth_date está faltando as aspas assim não reconhece como tipo DATE

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

##### f)

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

### 3 
##### a) 
SELECT id, name, salary, birth_date, gender  from Actor WHERE gender = "female";
##### b)
SELECT name, salary  from Actor WHERE name = "Tony Ramos";
##### c) trouxe um valor default que já estava com valores nulos, mesmo informando que não trouxe nada com zero linhas porém 
##### mostra a tabela com os valores null
SELECT id, name, salary, birth_date, gender  from Actor WHERE gender = "invalid";
##### d) 
SELECT id, name, salary from Actor WHERE salary <= 500000;
##### e) 
SELECT id, nome from Actor WHERE id = "002";
SELECT id, name from Actor WHERE id = "002";

### 4
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
##### a) feito um select que retorna todas as colunas da tabela Actor, das linhas que possuam A ou J no inicio que tenham o valor salary
##### acima de 300 mil. 
##### b) 
SELECT * FROM Actor
WHERE (name NOT LIKE "A%" AND salary > 350000);
##### c)
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%");
##### d) 
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;

### 5

##### a) 
CREATE TABLE Movie (
	id VARCHAR (255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
)
uma tabela com as informações pedidas o titulo está unique para que não haja filmes com mesmo nome, synopse como text para
texto maior que não caberia no VARCHAR, id como primaria e INT para a nota do filme 

##### b) 


