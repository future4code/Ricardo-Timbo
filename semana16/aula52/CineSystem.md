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

