<h1 align="center">


<p align="center"><b>Projeto Delas</b><p>

# <p align="center"> Senac | Porto Digital | Minas  <p>

## Este é um projeto Integrador do curso de aperfeiçoamento Backend | Turma 01  
<br>

- [:dart: Objetivo](#-Objetivo)
- [📁 Arquitetura do Projeto](#-Arquitetura-do-Projeto)
- [👩🏾‍💻 Tecnologias e Dependências Utilizadas](#-Tecnologias-e-Dependências-Utilizadas)
- [:inbox_tray: Instalação](#-Instalação)
- [:iphone: Interface Gráfica Para Realizar os Testes](#-Interface-Gráfica-Para-Realizar-os-Testes)
- [🔓 Preparando o Ambiente Para Autenticação](#-Preparando-o-Ambiente-Para-Autenticação)
- [🔐 Testando Rotas de Login e Rotas Com ou Sem Proteção](#-Testando-Rotas-de-Login-e-Rotas-Com-ou-Sem-Proteção)

<br>
<br>

## :dart: Objetivo

<br>


<br>
<br>
**[Apresentação do Projeto Final](#)**
<br>
<br>


## 📁 Arquitetura do Projeto

<br>

:pushpin: Lembre-se que a arquitetura ao final do projeto precisa ficar exatamente dessa maneira. 

```
 📁projeto-delas
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||--📁 config
   |  |    |- 📄 dbConnect.js
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 clientesController.js
   |  |    |- 📄 empreendedorasController.js  
   |  |
   |  |
   |  ||--📁 models
   |  |    |- 📄 clientes.js
   |  |    |- 📄 empreendedoras.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 clientes.js
   |  |    |- 📄 empreendedoras.js
   |  |    |- 📄 index.js 
   |  |
   |  ||-📄 app.js
   |  |
   |  |
   |  | 
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 server.js
   |- 📄 README.md


```

<br>
<br>


## 👩🏾‍💻 Tecnologias e Dependências Utilizadas

<br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|

<br>
Link para a documentação:

📝 [](#)

📝 [](#)

<br>
<br>

<h1 align="center">

<p align="center">
<img src= "#" width="500px" height="150"/>
</p>

# :inbox_tray: Instalação

<br>

```ps
# Clonar o repositório
$ git clone (https://github.com/DelisG/projeto-delas.git)

# Entrar na pasta do repositório
$ cd projeto-delas

# Instalar as dependências
$ npm install

# Executar o servidor para que você possa rodar o projeto localmente
$ npm start
```
<br>
<br>


## ⚗️ Interface Gráfica Para Realizar os Testes

<br>

📌 Este projeto está com os métodos HTTP organizados. Você pode testar as rotas Get, Post,Delete e Patch através de qualquer ferramenta cliente API REST, como Insomnia, Thunder Client, Postman, entre outros. Nesse projeto, utilizamos o [Postman](https://www.postman.com/downloads/). A interface é um CRUD.
<br>
<br>

▫️ Rota de criação de empreendedora
<br>

<img src= "#" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que retorna todas as empreendedoras
<br>

<img src= "#" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que retorna o empreendimento por categoria
<br>

<img src= "#" width="70%" height="40%"/>
</p>

<br>

▫️ Rota que altera algum dado do cadastro da empreendedora
<br>

<img src= "#" width="70%" height="40%"/>
</p>
<br>
<br>


## 🔐 Testando Rotas de Login e Rotas Com ou Sem Proteção

<br>

 📢 Todas as rotas existentes neste projeto:

- Usuários

| Verbo  |   EndPoint     |        Descrição da Rota                   | Status | Auth |
| ------ | -------------- | -------------------------------------------| ------ |----- |
| POST   | /registration  | Adicionar um novo usuário                  |   201  |  ✔️  |
| GET    | /search        | Listar todos os usuários                   |   200  |  ❌  |
| DELETE | /delete/:id    | Remove um usuário                          |   200  |  ✔️  |
| POST   | /login         | Devolve o token de um usuário              |   200  |  ✔️  |
<br>

- Catálogo completo

| Verbo  |   EndPoint      | Descrição da Rota                                            | Status | Auth |
| ------ | --------------- | -------------------------------------------------------------| ------ |----- |
| GET    | /catalog        | Lista todo o cátálogo do banco de dados, menos o de usuários |   201  |  ✔️  |
<br>

- Livros

| Verbo  |   EndPoint          | Descrição da Rota                      | Status | Auth |
| ------ | ------------------- | ---------------------------------------| ------ |----- |
| GET    | /books              | Listar todos os filmes cadastrados     |   200  |  ❌  |
| GET    | /book/title         | Mostra o cadastro do livro por título  |   200  |  ❌  |
| GET    | /book/:id           | Mostra o cadastro do livro por ID      |   200  |  ❌  |
| POST   | /books/registration | Registra um novo livro                 |   201  |  ✔️  |
| PATCH  | /book/update/:id    | Altera alguma informação sobre o livro |   201  |  ✔️  |
| DELETE | /book/delete/:id    | Remove o cadastro de um livro          |   200  |  ✔️  |
<br>

- Desenhos

| Verbo  |   EndPoint             |         Descrição da Rota                         | Status | Auth |
| ------ | ---------------------- | --------------------------------------------------| ------ |----- |
| GET    | /cartoons              | Listar todos os desenhos cadastrados              |   200  |  ❌  |
| GET    | /cartoon/title         | Mostra o cadastro do desenho por título           |   200  |  ❌  |
| GET    | /cartoons/age          | Listar todos os desenhos por classificação etária |   200  |  ❌  |
| GET    | /cartoon/:id           | Mostra o cadastro do desenho por ID               |   200  |  ❌  |
| POST   | /cartoons/registration | Registra um novo desenho                          |   201  |  ✔️  |
| PATCH  | /cartoon/update/:id    | Altera alguma informação sobre o desenho          |   201  |  ✔️  |
| DELETE | /cartoon/delete/:id    | Remove o cadastro de um desenho                   |   200  |  ✔️  |
<br>

- Filmes

| Verbo  |   EndPoint           |         Descrição da Rota                       | Status | Auth |
| ------ | -------------------- | ------------------------------------------------| ------ |----- |
| GET    | /movies              | Listar todos os filmes cadastrados              |   200  |  ❌  |
| GET    | /movie/title         | Mostra o cadastro do filme por título           |   200  |  ❌  |
| GET    | /movie/age           | Listar todos os filmes por classificação etária |   200  |  ❌  |
| GET    | /movie/:id           | Mostra o cadastro do filme por ID               |   200  |  ❌  |
| POST   | /movies/registration | Registra um novo filme                          |   201  |  ✔️  |
| PATCH  | /movie/update/:id    | Altera alguma informação sobre o filme          |   201  |  ✔️  |
| DELETE | /movie/delete/:id    | Remove o cadastro de um filme                   |   200  |  ✔️  |
<br>

- Séries

| Verbo  |   EndPoint         |         Descrição da Rota                       | Status | Auth |
| ------ | ------------------ | ------------------------------------------------| ------ |----- |
| GET    | /series            | Listar todas as séries cadastradas              |   200  |  ❌  |
| GET    | /serie/title       | Mostra o cadastro da série por título           |   200  |  ❌  |
| GET    | /serie/age         | Listar todas as séries por classificação etária |   200  |  ❌  |
| GET    | /serie/:id         | Mostra o cadastro da série por ID               |   200  |  ❌  |
| POST   | /series/create     | Registra uma nova série                         |   201  |  ✔️  |
| PATCH  | /series/update/:id | Altera alguma informação sobre a série          |   201  |  ✔️  |
| DELETE | /serie/delete/:id  | Remove o cadastro de uma série                  |   200  |  ✔️  |

<br>

 *PROTEÇÃO* Para testar via Postman, passar bearer token no header de autenticação $ Bearer Token

<br>
<br>


## 🧪 Teste Jest

</br>

<br>

Projeto criado com a orientação e cuidado da Professora [Tereza Oliveira](https://github.com/devcode25))!<br>

<span align="center">

#  Muito obrigada a você que chegou até aqui! 💜 </h2>

</span>

<p align="center">
<img src= "#" width="50%" height="30%"/>
</p>

