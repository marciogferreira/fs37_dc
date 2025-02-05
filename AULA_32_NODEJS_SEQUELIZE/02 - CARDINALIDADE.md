# Estudos - Cardinalidade em Bancos de Dados

## Introdução
Cardinalidade é um conceito essencial em modelagem de banco de dados, utilizado para descrever a quantidade de relacionamentos entre entidades. Ela define como os registros de uma tabela estão conectados aos registros de outra tabela, sendo um dos pilares da modelagem relacional.

Este documento apresenta uma visão geral sobre cardinalidade, seus tipos, exemplos práticos e a importância de aplicá-la corretamente.

---

## Tipos de Cardinalidade

### 1. **Um-para-Um (1:1)**
- **Definição**: Cada registro em uma tabela está relacionado com um único registro em outra tabela.
- **Exemplo**: Uma pessoa pode ter apenas um CPF, e cada CPF pertence a uma única pessoa.
- **Representação**:
  - Pessoa (1) ↔ (1) CPF

### 2. **Um-para-Muitos (1:N)**
- **Definição**: Um registro em uma tabela pode estar relacionado a vários registros em outra tabela, mas cada registro da segunda tabela está relacionado a apenas um registro da primeira.
- **Exemplo**: Um cliente pode fazer vários pedidos, mas cada pedido pertence a apenas um cliente.
- **Representação**:
  - Cliente (1) ↔ (N) Pedido

### 3. **Muitos-para-Muitos (N:M)**
- **Definição**: Vários registros de uma tabela podem estar relacionados a vários registros de outra tabela.
- **Exemplo**: Alunos podem se inscrever em vários cursos, e cada curso pode ter vários alunos.
- **Representação**:
  - Aluno (N) ↔ (M) Curso

Para implementar esse tipo de relacionamento, é necessário criar uma tabela intermediária (tabela de associação).

---

## Exemplo Prático de Cardinalidade

### Cenário 1: Um-para-Um
**Tabelas**:
- `Pessoa (id, nome)`
- `CPF (id, numero, pessoa_id)`

**Relacionamento**:
- A coluna `pessoa_id` na tabela `CPF` referencia a chave primária `id` na tabela `Pessoa`.

### Cenário 2: Um-para-Muitos
**Tabelas**:
- `Cliente (id, nome)`
- `Pedido (id, data, cliente_id)`

**Relacionamento**:
- A coluna `cliente_id` na tabela `Pedido` referencia a chave primária `id` na tabela `Cliente`.

### Cenário 3: Muitos-para-Muitos
**Tabelas**:
- `Aluno (id, nome)`
- `Curso (id, nome)`
- `Aluno_Curso (aluno_id, curso_id)`

**Relacionamento**:
- As colunas `aluno_id` e `curso_id` na tabela `Aluno_Curso` referenciam as chaves primárias de `Aluno` e `Curso`, respectivamente.

---

## Importância da Cardinalidade
1. **Integridade dos Dados**:
   - Define restrições claras sobre como os dados estão relacionados.
   - Previne inconsistências e redundâncias.

2. **Eficiência**:
   - Ajuda a otimizar consultas ao banco de dados.
   - Reduz o uso desnecessário de recursos.

3. **Escalabilidade**:
   - Permite que o banco de dados cresça de forma estruturada.

---

## Representação Visual
Ferramentas de modelagem como MySQL Workbench, dbdiagram.io e Draw.io são excelentes para visualizar e documentar a cardinalidade entre entidades.

---

## Conclusão
A cardinalidade é essencial para criar um banco de dados eficiente, escalável e fácil de manter. Ao entender os diferentes tipos de relacionamentos, você pode projetar esquemas que atendam melhor às necessidades do sistema e garantam a integridade dos dados.


