# Estudos - Tabelas e Relacionamentos em Banco de Dados

## Introdução
Este documento fornece uma explicação básica sobre tabelas e relacionamentos em bancos de dados relacionais. Ele é ideal para estudantes ou iniciantes que desejam compreender os fundamentos necessários para modelar e implementar bancos de dados eficientes.

---

## O Que São Tabelas?
As tabelas são a estrutura básica de armazenamento em um banco de dados relacional. Cada tabela armazena dados organizados em linhas (tuplas) e colunas (atributos).

### Componentes de uma Tabela:
1. **Colunas**:
   - Representam os campos ou atributos da tabela.
   - Definem o tipo de dado (e.g., `INTEGER`, `VARCHAR`, `DATE`).

2. **Linhas**:
   - Cada linha representa um registro único dentro da tabela.

3. **Chave Primária (Primary Key)**:
   - É um identificador único para cada registro.
   - Exemplo: Uma tabela de usuários pode ter a coluna `id` como chave primária.

### Exemplo de Tabela:
**Usuário**
| id  | nome       | email              | data_nascimento |
|-----|------------|--------------------|------------------|
| 1   | João Silva | joao@email.com     | 1990-05-15       |
| 2   | Ana Costa  | ana@email.com      | 1985-10-20       |

---

## Relacionamentos entre Tabelas
Os relacionamentos definem como as tabelas estão conectadas. Eles ajudam a evitar redundância de dados e garantem a integridade referencial.

### Tipos de Relacionamentos:

1. **Um-para-Um (1:1)**
   - Cada registro em uma tabela está associado a exatamente um registro em outra tabela.
   - Exemplo: Um usuário pode ter apenas um perfil.

2. **Um-para-Muitos (1:N)**
   - Um registro em uma tabela pode estar associado a vários registros em outra tabela.
   - Exemplo: Um cliente pode fazer vários pedidos.

3. **Muitos-para-Muitos (N:M)**
   - Vários registros de uma tabela podem estar associados a vários registros de outra tabela.
   - Exemplo: Alunos podem estar matriculados em vários cursos, e cada curso pode ter vários alunos.

### Implementação dos Relacionamentos:

#### 1. Chave Estrangeira (Foreign Key):
   - É usada para estabelecer um vínculo entre as tabelas.
   - Exemplo: A tabela `Pedido` pode ter uma coluna `cliente_id` que referencia a chave primária da tabela `Cliente`.

#### 2. Tabela de Associação:
   - É usada para implementar relacionamentos N:M.
   - Exemplo: Uma tabela `Aluno_Curso` pode conter as colunas `aluno_id` e `curso_id` para mapear os relacionamentos entre alunos e cursos.

---

## Exemplo Prático

### Estrutura de Tabelas e Relacionamentos:

#### Tabela: Cliente
| id  | nome       | email              |
|-----|------------|--------------------|
| 1   | João Silva | joao@email.com     |
| 2   | Ana Costa  | ana@email.com      |

#### Tabela: Pedido
| id  | cliente_id | data       | valor_total |
|-----|------------|------------|-------------|
| 1   | 1          | 2024-01-10 | 150.00      |
| 2   | 2          | 2024-01-11 | 200.00      |

#### Relacionamento:
- A coluna `cliente_id` na tabela `Pedido` é uma chave estrangeira que referencia a coluna `id` da tabela `Cliente`.
- Este é um relacionamento 1:N, onde um cliente pode ter vários pedidos.

---

## Ferramentas para Modelagem
Recomenda-se o uso de ferramentas para criar diagramas de entidade-relacionamento (ER), como:
- **Draw.io**
- **dbdiagram.io**
- **MySQL Workbench**

Estas ferramentas ajudam a visualizar os relacionamentos e garantir a integridade dos dados durante a implementação.

---

## Boas Práticas
1. Sempre defina chaves primárias para identificar registros unicamente.
2. Use nomes de tabelas e colunas que sejam claros e descritivos.
3. Normalize o banco de dados para reduzir redundâncias.
4. Garanta a integridade referencial com chaves estrangeiras.

---

## Conclusão
A compreensão de tabelas e relacionamentos é essencial para modelar e implementar bancos de dados eficazes. Este README fornece uma visão geral e prática sobre o tema, com exemplos claros para ajudar no aprendizado.

