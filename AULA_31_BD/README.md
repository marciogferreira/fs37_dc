No MySQL, o conceito de "domínios" se refere a valores ou tipos de dados que são usados em colunas de tabelas. O MySQL não tem um comando direto que liste todos os "domínios", mas pode-se inferir essa informação a partir de todos os tipos de dados usados nas tabelas e colunas do banco de dados. 

Abaixo estão os principais **tipos de dados** (que podem ser considerados "domínios") que o MySQL utiliza:

### Tipos de Dados Numéricos:
1. **TINYINT**: Um inteiro muito pequeno (-128 a 127 ou 0 a 255 se unsigned).
2. **SMALLINT**: Inteiro pequeno (-32.768 a 32.767 ou 0 a 65.535 se unsigned).
3. **MEDIUMINT**: Inteiro médio (-8.388.608 a 8.388.607 ou 0 a 16.777.215 se unsigned).
4. **INT** ou **INTEGER**: Inteiro (-2.147.483.648 a 2.147.483.647 ou 0 a 4.294.967.295 se unsigned).
5. **BIGINT**: Inteiro grande (-9.223.372.036.854.775.808 a 9.223.372.036.854.775.807 ou 0 a 18.446.744.073.709.551.615 se unsigned).
6. **FLOAT**: Número de ponto flutuante de precisão simples.
7. **DOUBLE**: Número de ponto flutuante de precisão dupla.
8. **DECIMAL** ou **NUMERIC**: Números de ponto fixo com precisão exata (ideal para valores monetários).

### Tipos de Dados de Texto (Strings):
1. **CHAR**: String de comprimento fixo (até 255 caracteres).
2. **VARCHAR**: String de comprimento variável (até 65.535 caracteres).
3. **TEXT**: Texto longo (até 65.535 caracteres).
4. **TINYTEXT**: Texto muito pequeno (até 255 caracteres).
5. **MEDIUMTEXT**: Texto médio (até 16.777.215 caracteres).
6. **LONGTEXT**: Texto muito grande (até 4.294.967.295 caracteres).
7. **BLOB**: "Binary Large Object" para armazenar dados binários.
8. **TINYBLOB**: BLOB pequeno.
9. **MEDIUMBLOB**: BLOB médio.
10. **LONGBLOB**: BLOB muito grande.

### Tipos de Dados de Data e Hora:
1. **DATE**: Data (ano, mês, dia).
2. **DATETIME**: Data e hora (ano, mês, dia, hora, minuto, segundo).
3. **TIMESTAMP**: Data e hora com fuso horário, útil para rastrear modificações (ano, mês, dia, hora, minuto, segundo).
4. **TIME**: Hora (hora, minuto, segundo).
5. **YEAR**: Ano.

### Tipos de Dados Booleanos:
1. **BOOLEAN** ou **BOOL**: Usado para valores lógicos, que podem ser 0 (falso) ou 1 (verdadeiro).

### Tipos de Dados Espaciais:
1. **POINT**: Representa um ponto no espaço.
2. **LINESTRING**: Representa uma linha no espaço.
3. **POLYGON**: Representa um polígono no espaço.
4. **GEOMETRY**: Tipo genérico para dados espaciais.
5. **GEOGRAPHY**: Tipo para coordenadas geográficas.

### Tipos de Dados JSON:
1. **JSON**: Para armazenar dados no formato JSON.

### Outras Considerações:
- O MySQL também possui modificadores que podem ser aplicados a esses tipos de dados, como `UNSIGNED` (sem sinal) e `ZEROFILL` (preenchimento com zero).
  
### Como consultar os tipos de dados usados nas tabelas
Para verificar os tipos de dados das colunas nas tabelas de um banco de dados MySQL, você pode usar a seguinte consulta SQL:

```sql
DESCRIBE nome_da_tabela;
```

Ou, para uma visão geral de todos os tipos de dados em todas as tabelas de um banco de dados, você pode consultar o banco de dados `information_schema`:

```sql
SELECT TABLE_NAME, COLUMN_NAME, DATA_TYPE
FROM information_schema.columns
WHERE table_schema = 'nome_do_banco';
```

Essa consulta vai retornar o nome das tabelas, o nome das colunas e os tipos de dados usados.


CREATE DATABASE fs37;

CREATE TABLE fs37.produtos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    valor FLOAT NOT NULL,
    quantidade INT NOT NULL
)

CREATE TABLE IF NOT EXISTS fs37.produtos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    valor FLOAT NOT NULL,
    quantidade INT NOT NULL
)