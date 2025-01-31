# My Contacts API

API para gerenciamento de contatos e categorias desenvolvida com Node.js.

## 🚀 Funcionalidades

- Gerenciamento de contatos (CRUD)
- Gerenciamento de categorias (CRUD)
- Relacionamento entre contatos e categorias
- Pesquisa e filtragem de contatos

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL
- Docker (opcional)

## 🔧 Instalação e Configuração

1. Clone o repositório:

```bash
git clone https://github.com/caioorg/my-contacts-api.git
cd my-contacts-api
```

2. Instale as dependências:

```bash
yarn install
```

## 📚 Endpoints da API

### Contatos

- `GET /contacts` - Lista todos os contatos
- `GET /contacts/:id` - Obtém um contato específico
- `POST /contacts` - Cria um novo contato
- `PUT /contacts/:id` - Atualiza um contato
- `DELETE /contacts/:id` - Remove um contato

### Categorias

- `GET /categories` - Lista todas as categorias
- `GET /categories/:id` - Obtém uma categoria específica
- `POST /categories` - Cria uma nova categoria
- `PUT /categories/:id` - Atualiza uma categoria
- `DELETE /categories/:id` - Remove uma categoria

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL
- Docker Image PostGres

## 📄 Licença

Este projeto está sob a licença MIT

## ✒️ Autor

Caio Silva - [GitHub](https://github.com/caioorg)
