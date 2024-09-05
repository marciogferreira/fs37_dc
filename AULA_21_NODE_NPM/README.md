
# Aula de Node + NPM - Prof. Márcio Ferreira
# Guia Rápido sobre Node.js, npm e `package.json`

Bem-vindo ao seu projeto Node.js! Este README fornece uma visão geral sobre Node.js, npm e o arquivo `package.json`, ajudando você a entender e gerenciar melhor o ambiente e as dependências do seu projeto.

## O que é Node.js?

Node.js é um ambiente de execução JavaScript do lado do servidor, construído sobre o motor V8 do Google Chrome. Ele permite que você execute código JavaScript fora do navegador, possibilitando a construção de aplicações de servidor, APIs, ferramentas de linha de comando e muito mais.

### Principais Características:
- **Assíncrono e baseado em eventos**: Ideal para aplicações que lidam com I/O intensiva.
- **Single-threaded**: Usa um único thread para gerenciar conexões simultâneas.
- **NPM (Node Package Manager)**: Gerenciador de pacotes padrão para instalar e gerenciar bibliotecas e ferramentas.

## O que é npm?

npm (Node Package Manager) é o gerenciador de pacotes padrão para Node.js. Ele ajuda a instalar, atualizar e gerenciar dependências e scripts no seu projeto.

### Comandos Básicos:
- **Instalar pacotes**: `npm install <pacote>`
- **Instalar pacotes de desenvolvimento**: `npm install <pacote> --save-dev`
- **Remover pacotes**: `npm uninstall <pacote>`
- **Atualizar pacotes**: `npm update`
- **Executar scripts**: `npm run <script>`

## O que é `package.json`?

O `package.json` é um arquivo crucial no seu projeto Node.js. Ele contém informações sobre o projeto e gerencia as dependências, scripts e metadados necessários.

### Estrutura do `package.json`:

```json
{
  "name": "nome-do-projeto",
  "version": "1.0.0",
  "description": "Uma breve descrição do projeto",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Erro: nenhum teste especificado\" && exit 1",
    "start": "node index.js"
  },
  "keywords": [
    "nodejs",
    "npm"
  ],
  "author": "Seu Nome",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemon": "^2.0.12"
  }
}
```

### Principais Seções:

- **`name`**: Nome do projeto.
- **`version`**: Versão atual do projeto.
- **`description`**: Descrição breve do projeto.
- **`main`**: Arquivo de entrada principal do projeto.
- **`scripts`**: Scripts personalizados que você pode executar com `npm run`.
- **`dependencies`**: Pacotes necessários para o funcionamento do projeto.
- **`devDependencies`**: Pacotes necessários apenas durante o desenvolvimento.

### Adicionando Dependências:

Para adicionar novas dependências, você pode usar o comando `npm install <pacote>`. As dependências serão automaticamente registradas na seção `dependencies` do `package.json`. Para dependências de desenvolvimento, use `npm install <pacote> --save-dev`.

### Executando Scripts:

Você pode definir e executar scripts personalizados no `package.json` através da seção `scripts`. Por exemplo, para definir um script de inicialização, adicione o seguinte:

```json
"scripts": {
  "start": "node index.js"
}
```

E execute com:

```bash
npm run start
```

## Conclusão

Node.js, npm e o `package.json` são componentes fundamentais para o desenvolvimento moderno de aplicações JavaScript. Entender como usá-los eficientemente ajudará a manter seu projeto organizado e fácil de gerenciar.

Para mais informações, consulte a documentação oficial:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)

Boa codificação!

