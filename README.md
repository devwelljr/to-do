# Desafio EBYRT

## Sobre o projeto

Desafio Técnico para processo seletivo, este projeto consiste na implementação de um sistema de lista de tarefas com um login, CRUD de
tarefas.

Onde feito o login e gerado um token para a autenticação do usuário, pois apenas o próprio usuário pode ver, criar, atualizar e deletar suas tarefas.

## Tecnologias Utilizadas


## Backend

#### :link: [Node.js](https://nodejs.org/en/)
#### :link: [Express](https://expressjs.com/pt-br/)
#### :link: [MongoDB](https://docs.mongodb.com/)
#### :link: [JsonWebToken](https://jwt.io/introduction)
#### :link: [Joi](https://joi.dev/api/?v=17.5.0)
#### :link: [ESLint](https://eslint.org/)


## Frontend
#### :link: [React](https://pt-br.reactjs.org/docs/getting-started.html)
#### :link: [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
#### :link: [Axios](https://github.com/axios/axios)
#### :link: [ESLint](https://eslint.org/)


## Pré-Requisitos

Este projeto Utiliza o banco de dados MongoDB, para o funcionamento é necessário ter o banco de dados em sua máquina. Para instruções sobre a instalação do banco de dados acesse [MongoDB](https://docs.mongodb.com/manual/installation/).

## Instalação

-Clone o repositório através da seguinte chave https: `https://github.com/devwelljr/to-do.git`

-Instale as dependências do backend e frontend, entrando na raiz `./backend` dando `npm install` e o mesmo processo no frontend.

-Crie um arquivo de variáveis de ambiente na raiz do `./backend`, `.env` seguindo o arquivo `.env.example` como molde.

-Para rodar a aplicação de `npm start` no `./frontend` e `npm run dev` no `./backend`.

## Como utilizar

### Login: http://localhost:3000/login

A aplicação começa com o cliente tendo que fazer login ou se cadastrar no `Tarefas Ebyrt`, onde deve digitar seu `email` e sua senha para ser redirecionado a página de suas tarefas.

### Cadastro: http://localhost:3000/register

Na tela de cadastro para se criar uma conta o usuário precisa cadastrar seu `usuário` com no mínimo 4 carácteres, sua `senha` com no mínimo 6 carácteres e um `email` válido.
PS: O `email` é unico no sistema, não sendo possível ter dois usuários com o mesmo email.

### Tarefas: http://localhost:3000/mytasks

Nesta tela o usuário consegue ver sua lista de tarefas e altera-la.


