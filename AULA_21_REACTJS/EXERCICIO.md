
# Guia de Início Rápido com Vite e React

Bem-vindo ao seu projeto Vite + React! Este README fornece instruções básicas para configurar seu projeto e um pequeno exercício para ajudá-lo a criar os componentes `Cabecalho`, `Blog` e `Rodape`.

## O que é Vite?

Vite é uma ferramenta de construção moderna que proporciona uma experiência de desenvolvimento rápida e eficiente. Ele utiliza ES modules nativos e oferece Hot Module Replacement (HMR) para uma experiência de desenvolvimento suave.

## O que é ReactJS?

ReactJS é uma biblioteca JavaScript para construir interfaces de usuário. Ele permite a criação de componentes reutilizáveis e gerencia o estado da aplicação de maneira eficiente.

## Configurando o Projeto

### Passo 1: Criar um Novo Projeto

Abra o terminal e execute o seguinte comando para criar um novo projeto com Vite e React:

```bash
npm create vite@latest meu-projeto --template react
```

Substitua `meu-projeto` pelo nome desejado para o seu projeto.

### Passo 2: Navegar até o Diretório do Projeto

```bash
cd meu-projeto
```

### Passo 3: Instalar Dependências

Instale as dependências do projeto:

```bash
npm install
```

### Passo 4: Iniciar o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento e ver a aplicação em execução:

```bash
npm run dev
```

O Vite iniciará um servidor local e você pode acessar sua aplicação em `http://localhost:5173`.

## Exercício: Criar Componentes Básicos

Vamos criar três componentes básicos para sua aplicação: `Cabecalho`, `Blog` e `Rodape`. Esses componentes serão importados e usados no componente principal da aplicação.

### Passo 1: Criar os Componentes

0. **Apague todo o conteúdo do Arquivo App.jsx, App.css e index.css**:
1. **Crie um diretório para componentes**:

   ```bash
   mkdir src/components
   ```


2. **Crie o componente `Cabecalho`**:


   No arquivo `src/components/Cabecalho.jsx`:

   ```jsx
   import React from 'react';

   const Cabecalho = () => {
     return (
       <header>
         <h1>Meu Blog</h1>
       </header>
     );
   };

   export default Cabecalho;
   ```

3. **Crie o componente `Blog`**:

   No arquivo `src/components/Blog.jsx`:

   ```jsx
   import React from 'react';

   const Blog = () => {
     return (
       <main>
         <h2>Postagens Recentes</h2>
         <article>
           <h3>Postagem 1</h3>
           <p>Conteúdo da postagem 1.</p>
         </article>
         <article>
           <h3>Postagem 2</h3>
           <p>Conteúdo da postagem 2.</p>
         </article>
       </main>
     );
   };

   export default Blog;
   ```

4. **Crie o componente `Rodape`**:

   No arquivo `src/components/Rodape.jsx`:

   ```jsx
   import React from 'react';

   const Rodape = () => {
     return (
       <footer>
         <p>&copy; 2024 Meu Blog. Todos os direitos reservados.</p>
       </footer>
     );
   };

   export default Rodape;
   ```

### Passo 2: Atualizar o Componente Principal

Atualize o arquivo `src/App.jsx` para importar e usar os novos componentes:

```jsx
import React from 'react';
import Cabecalho from './components/Cabecalho';
import Blog from './components/Blog';
import Rodape from './components/Rodape';
import './styles.css'; // Importando estilos, se houver

const App = () => {
  return (
    <div>
      <Cabecalho />
      <Blog />
      <Rodape />
    </div>
  );
};

export default App;
```

### Passo 3: Testar a Aplicação

Salve todas as alterações e verifique a aplicação em `http://localhost:5173`. Você deve ver a estrutura básica com o `Cabecalho`, `Blog` e `Rodape` exibidos na página.

## Conclusão

Você agora tem um projeto Vite + React básico com os componentes `Cabecalho`, `Blog` e `Rodape` configurados. Vite fornece uma configuração rápida e React ajuda a criar uma UI modular e gerenciável. Continue explorando e construindo sua aplicação!

Para mais informações, consulte a documentação oficial:

- [Vite](https://vitejs.dev/)
- [ReactJS](https://reactjs.org/)

Boa codificação!

