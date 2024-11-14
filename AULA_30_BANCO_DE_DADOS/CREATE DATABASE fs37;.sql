CREATE DATABASE fs37;

Apos criar o comando, voce deve clicar no raio
para executar no banco.

CREATE TABLE fs37.produtos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    valor FLOAT NOT NULL,
    quantidade INT NOT NULL
);

----------------- INSERINDO DADOS NA TABELA PRODUTOS ----------------

INSERT INTO fs37.produtos(nome, valor, quantidade) 
VALUES ('Mouse USB', 15.99, 100);

INSERT INTO fs37.produtos(nome, valor, quantidade) 
VALUES ('Teclado USB', 29.99, 100);

MONITOR
NOTEBOOK HP

-------------- CONSULTANDO DADOS DA TABELA --------------
SELECT * FROM fs37.produtos;
SELECT * FROM fs37.produtos WHERE id = 1;
SELECT * FROM fs37.produtos WHERE nome = 'Teclado USB';

SELECT nome, valor FROM fs37.produtos;
SELECT nome, quantidade FROM fs37.produtos;
SELECT * FROM fs37.produtos WHERE quantidade > 0;

-------------- ATUALIZANDO DADOS DA TABELA --------------
-- PRECISAMOS MUDAR O NOME DE UM PRODUTO, PARA ISSO UTILIZAMOS
-- O UPDATE
UPDATE fs37.produtos 
SET quantidade = 50, valor = 21.99
WHERE id = 1;
------------- DELETANDO REGISTROS DA BASE
DELETE FROM fs37.produtos WHERE id = 1;





-- ALIMENTE SUA BASE DE DADOS COM OS SEGUINTES DADOS:

SMARTPHONE - 1599.99 - 50
TABLET - 599.99 - 10
MONITOR HP - 3200.99 - 5
ESTABILIZADOR - 999.99 - 10
CARREGADOR USB - 29.99 - 2
MOUSEPAD - 14.99 - 0

SELECT * FROM fs37.produtos;
DELETE FROM fs37.produtos WHERE id >= 11 and id <= 28;


--------- 
MONICA PRECISA DE UM RELATORIO DE PRODUTOS COM
A QUANTIDADE DE ESTOQUE ACIMA DE 2 PRODUTOS E 
OS VALORES DEVEM SER ACIMA DE 30 REAIS.
OS CAMPOS QUE DEVEM EXIBIR NO RELATORIO SAO:
ID, NOME, VALOR, QUANTIDADE

OBS: CRIE UM SQL UTILIZANDO O SELECT PARA GERAR O RELATORIO
WHERE id = 1 and valor > 15.99
