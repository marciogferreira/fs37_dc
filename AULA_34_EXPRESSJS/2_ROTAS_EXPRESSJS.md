### Explicação sobre Rotas no ExpressJS

No **ExpressJS**, as rotas são usadas para definir o comportamento da aplicação quando uma requisição HTTP é feita a um determinado caminho ou URL. A rota é basicamente a combinação de um método HTTP (como GET, POST, PUT, DELETE) com uma URL, e o Express lida com a lógica que será executada quando essa combinação for atendida.

### Métodos HTTP: GET, POST, PUT e DELETE

Esses são os métodos HTTP mais comuns utilizados em aplicações web e APIs RESTful. Cada um tem uma função específica no ciclo de vida de uma requisição:

- **GET**: Usado para **recuperar** dados do servidor. Ele é geralmente usado quando o cliente deseja obter informações sem causar qualquer alteração no servidor.
- **POST**: Usado para **enviar** dados ao servidor, frequentemente para criar novos registros ou enviar dados de formulários.
- **PUT**: Usado para **atualizar** recursos existentes no servidor, substituindo-os por novos dados completos.
- **DELETE**: Usado para **deletar** um recurso no servidor.

### Exemplo básico de rotas no Express:

```javascript
const express = require('express');
const app = express();

// Middleware para fazer o parse do corpo da requisição em JSON
app.use(express.json());

// GET: Recuperar dados
app.get('/usuario', (req, res) => {
  res.send('Recuperando usuário');
});

// POST: Criar dados
app.post('/usuario', (req, res) => {
  const usuario = req.body; // Dados enviados no corpo da requisição
  res.send(`Usuário ${usuario.nome} criado`);
});

// PUT: Atualizar dados
app.put('/usuario/:id', (req, res) => {
  const { id } = req.params; // Parâmetro da URL
  const usuarioAtualizado = req.body; // Dados para atualizar
  res.send(`Usuário ${id} atualizado com nome ${usuarioAtualizado.nome}`);
});

// DELETE: Deletar dados
app.delete('/usuario/:id', (req, res) => {
  const { id } = req.params; // Parâmetro da URL
  res.send(`Usuário ${id} deletado`);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
```

### Passagem de Parâmetros na URL: `params`, `query` e `body`

No ExpressJS, existem diferentes formas de passar parâmetros para as rotas. Esses parâmetros podem ser usados de acordo com a necessidade da requisição.

#### 1. **`req.params` (Parâmetros de Rota)**

Parâmetros de rota são parte da URL e são definidos com dois pontos `:` na definição da rota. Eles são usados para capturar informações específicas da URL.

Exemplo de URL: `/usuario/123`

```javascript
app.get('/usuario/:id', (req, res) => {
  const { id } = req.params; // Captura o parâmetro de rota 'id'
  res.send(`ID do usuário é: ${id}`);
});
```

- **Uso**: Quando você quer capturar um valor específico na URL, como um identificador de recurso.

Exemplo de chamada de requisição:
```http
GET /usuario/123
```
Isso retornaria: `ID do usuário é: 123`.

#### 2. **`req.query` (Parâmetros de Consulta ou Query Parameters)**

Os parâmetros de consulta são passados na URL após o ponto de interrogação `?` e são usados para enviar dados adicionais em uma requisição. Eles não são obrigatórios e são geralmente usados para filtrar ou paginar resultados.

Exemplo de URL com query parameters: `/usuarios?idade=30&cidade=São Paulo`

```javascript
app.get('/usuarios', (req, res) => {
  const { idade, cidade } = req.query; // Captura os parâmetros de consulta
  res.send(`Buscando usuários com idade: ${idade} e cidade: ${cidade}`);
});
```

- **Uso**: Para enviar dados extras que não fazem parte da estrutura principal da URL, como filtros ou configurações de paginação.

Exemplo de chamada de requisição:
```http
GET /usuarios?idade=30&cidade=São Paulo
```
Isso retornaria: `Buscando usuários com idade: 30 e cidade: São Paulo`.

#### 3. **`req.body` (Corpo da Requisição)**

O corpo da requisição é usado principalmente em requisições **POST** e **PUT**, onde dados são enviados para o servidor. Para manipular o corpo da requisição, você precisa usar um middleware como `express.json()` para fazer o **parsing** de dados JSON.

Exemplo de requisição **POST**:

```javascript
app.post('/usuario', (req, res) => {
  const usuario = req.body; // Captura os dados do corpo da requisição
  res.send(`Usuário ${usuario.nome} criado`);
});
```

- **Uso**: Para enviar dados mais complexos, como formulários ou objetos JSON, no corpo da requisição.

Exemplo de chamada de requisição:
```http
POST /usuario
Content-Type: application/json

{
  "nome": "João",
  "idade": 28
}
```

Isso retornaria: `Usuário João criado`.

### Resumo das diferenças:

- **`params`**: Parâmetros na URL (por exemplo, `/usuario/123`).
- **`query`**: Parâmetros de consulta após `?` na URL (por exemplo, `/usuarios?idade=30`).
- **`body`**: Dados enviados no corpo da requisição (geralmente em POST ou PUT).

### Conclusão

Esses métodos e formas de passagem de parâmetros permitem que você crie APIs flexíveis e poderosas. O Express facilita a manipulação de requisições e a extração de dados, seja da URL, dos parâmetros de consulta ou do corpo da requisição. Com isso, você pode facilmente criar rotas para manipular dados de entrada e saída, tornando sua aplicação mais dinâmica e interativa.