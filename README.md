# Projeto REST de cadastro de clientes

Teste prático codificado em Node.Js para cadastro de cliente.

### Pré-requisitos

Módulos node utilizados:

``` 
email-validator 2.0.4,
express 4.17.1,
mysql 2.18.1 (Apenas por questões de compatibilidade),
mysql2 2.2.5,
node-fetch 2.6.1,
nodemon 2.0.7,
sequelize 6.4.0,
```

SGBD

```
Mysql 5.7.23 ou superior
```

Ferramenta para gerenciamento de requisições HTTP

```
Exemplo: Insomnia, Postman
```

### Installing

Configurando o banco de dados:

```
Migrations não foram utilizadas, então importe o dump_development.sql em seu SGBD.

Caso necessário acesse a pasta /src/config e altere os dados de conexão
```

Instale as dependências do Node utilizando seu terminal preferido:

```
$npm install email-validator express mysql mysql2 node-fetch nodemon sequelize --save
```

Execute o projeto em seu terminal preferido:

```
$npm start
```

## Testando

Utilize as seguintes rotas:

### Rotas do cliente

1.  Método GET =>  localhost:3000/customers

Resposta esperada similar a:

```
{
  "customers": [
    {
      "id": 4,
      "name": "Nome",
      "surname": "Sobrenome",
      "email": "emailcadastrado@c.com",
      "cpf": 100000000,
      "createdAt": "2021-01-23T09:58:32.000Z",
      "updatedAt": "2021-01-23T09:58:32.000Z"
    }
  ]
}
```
2. Método GET => localhost:3000/customers/search

Insira um corpo Json similar a:

```
{
	
	"email":"a@a.com"
	
}
```

Resposta esperada similar a:

```
{
  "customers": {
    "id": 2,
    "name": "Nome",
    "surname": "Sobrenome",
    "email": "a@a.com",
    "createdAt": "2021-01-22T20:48:50.000Z",
    "updatedAt": "2021-01-22T20:48:50.000Z"
  }
}
```

3. Método POST => localhost:3000/customers/

Insira um corpo Json similar a:

```
{

"name":"Nome",
"surname":"Sobrenome",
"email":"e@e.com",
"cpf":400000000

}
```

Resposta esperada:

```
{
  "status": 1,
  "message": "Well done! Registration complete!"
}
```

### Rotas de endereço do cliente

1. Método GET => localhost:3000/customers/{ID do cliente}/address

Resposta esperada:

```
{
  "id": 7,
  "name": "Nome",
  "surname": "Sobrenome",
  "email": "e@e.com",
  "cpf": 400000000,
  "createdAt": "2021-01-23T10:46:53.000Z",
  "updatedAt": "2021-01-23T10:46:53.000Z",
  "Address": {
    "id": 57,
    "cep": 1001000,
    "street": "Praça da Sé",
    "number": "s/n",
    "district": "Sé",
    "city": "São Paulo",
    "state": "SP",
    "createdAt": "2021-01-23T10:47:09.000Z",
    "updatedAt": "2021-01-23T10:47:09.000Z",
    "customers_id": 7
  }
}
```

2. Método POST => localhost:3000/customers/{ID do cliente}/address

Utilizando apenas um cep válido de 8 dígitos, insira um corpo Json similar a:

```
{
	"cep":"01001000",
	"street":"",
	"number":"",
	"district":"",
	"city":""
}
```
Resposta esperada:

```
{
  "status": 1,
  "message": "Well done! Address associate to customer!"
}
```