# Estudos - Tipos de SQL

## Introdução
SQL (Structured Query Language) é a linguagem padrão para gerenciar e manipular dados em sistemas de banco de dados relacionais. Ela é dividida em diferentes tipos de comandos, cada um com uma finalidade específica para criar, consultar, modificar ou gerenciar bancos de dados e seus elementos.

Este README apresenta os principais tipos de SQL e suas respectivas funções, incluindo exemplos para facilitar o entendimento.

---

## Tipos de SQL

### 1. **DDL (Data Definition Language)**
**Descrição**: Usada para definir e modificar a estrutura do banco de dados, como tabelas, índices e esquemas.

**Principais Comandos**:
- **CREATE**: Cria novos objetos no banco de dados (tabelas, esquemas, etc.).
  ```sql
  CREATE TABLE Cliente (
      id INT PRIMARY KEY,
      nome VARCHAR(100),
      email VARCHAR(100)
  );
  ```

- **ALTER**: Modifica a estrutura de objetos existentes.
  ```sql
  ALTER TABLE Cliente ADD telefone VARCHAR(15);
  ```

- **DROP**: Remove objetos do banco de dados.
  ```sql
  DROP TABLE Cliente;
  ```

- **TRUNCATE**: Remove todos os registros de uma tabela, mantendo sua estrutura.
  ```sql
  TRUNCATE TABLE Cliente;
  ```

---

### 2. **DML (Data Manipulation Language)**
**Descrição**: Usada para manipular os dados armazenados nas tabelas do banco de dados.

**Principais Comandos**:
- **INSERT**: Insere novos registros em uma tabela.
  ```sql
  INSERT INTO Cliente (id, nome, email) VALUES (1, 'João Silva', 'joao@email.com');
  ```

- **UPDATE**: Atualiza registros existentes.
  ```sql
  UPDATE Cliente SET email = 'novoemail@email.com' WHERE id = 1;
  ```

- **DELETE**: Remove registros de uma tabela.
  ```sql
  DELETE FROM Cliente WHERE id = 1;
  ```

---

### 3. **DQL (Data Query Language)**
**Descrição**: Usada para consultar dados no banco de dados.

**Comando Principal**:
- **SELECT**: Recupera dados de uma ou mais tabelas.
  ```sql
  SELECT nome, email FROM Cliente WHERE id = 1;
  ```

**Extras**:
- Filtros com `WHERE`, ordenação com `ORDER BY`, e agrupamentos com `GROUP BY` e `HAVING`.

---

### 4. **DCL (Data Control Language)**
**Descrição**: Usada para controlar permissões e acessos ao banco de dados.

**Principais Comandos**:
- **GRANT**: Concede permissões a usuários.
  ```sql
  GRANT SELECT, INSERT ON Cliente TO usuario1;
  ```

- **REVOKE**: Remove permissões de usuários.
  ```sql
  REVOKE SELECT, INSERT ON Cliente FROM usuario1;
  ```

---

### 5. **TCL (Transaction Control Language)**
**Descrição**: Usada para gerenciar transações no banco de dados, garantindo consistência.

**Principais Comandos**:
- **COMMIT**: Finaliza uma transação, salvando as alterações.
  ```sql
  COMMIT;
  ```

- **ROLLBACK**: Reverte uma transação, desfazendo alterações.
  ```sql
  ROLLBACK;
  ```

- **SAVEPOINT**: Define um ponto de salvamento dentro de uma transação.
  ```sql
  SAVEPOINT ponto1;
  ```

---

## Quando Usar Cada Tipo
- **DDL**: Para criar ou alterar a estrutura do banco de dados.
- **DML**: Para inserir, atualizar ou deletar dados nas tabelas.
- **DQL**: Para consultar dados armazenados.
- **DCL**: Para gerenciar acessos e permissões de usuários.
- **TCL**: Para controlar e gerenciar transações.

---

## Boas Práticas
1. Use comandos DDL com cautela, pois alterações na estrutura podem impactar o sistema.
2. Sempre faça backups antes de usar comandos destrutivos como `DROP` ou `TRUNCATE`.
3. Ao usar DML, combine `WHERE` para evitar alterações ou exclusões acidentais.
4. Controle transações com TCL para garantir consistência em operações complexas.
5. Gerencie permissões com DCL para proteger dados sensíveis.

---

## Conclusão
Compreender os diferentes tipos de SQL é essencial para trabalhar com bancos de dados relacionais de forma eficiente e segura. Este guia serve como uma referência prática para usar os comandos corretamente, garantindo um desenvolvimento sólido e confiável.


