# Car Shop

Este projeto consiste em uma API RESTful desenvolvida com Node.js, Express.js e MongoDB, que permite o cadastro e listagem de veículos (carros e motocicletas)

## Funcionalidades

- Retorna uma lista de todos os carros registrados.
- Retorna o carro com o ID especificado.
- Cria um novo carro com os dados fornecidos.
- Atualiza o carro com o ID especificado com os dados fornecidos.
- Deleta um carro com o ID especificado
- Retorna uma lista de todas as motocicletas registradas.
- Cria uma nova motocicleta com os dados fornecidos.
- Retorna uma motocicleta com o ID especificado.
- Atualiza uma motocicleta com o ID especificado com os dados fornecidos.
- Deleta uma motocicleta com o ID especificado

## Pré-requisitos

Para executar este projeto, é necessário ter o Node.js e o MongoDB instalados.

## Instalação

```bash
# Clonar Projeto
$ git clone https://github.com/pedroygor/car-shop.git

# Entrar no diretório
cd car-shop

# Instalar dependências
$ npm install

# Subir o docker
$ docker-compose up -d

# Visualizar terminal
$ docker exec -it car_shop bash 
```

## Testes

O projeto conta com testes unitários que cobrem pelo menos 80% da camada Service.

## Documentação API

### :car: Carros

#### Cadastrar carro

```http
POST /cars
```

| Parâmetro            | Tipo                    | Descrição                              |
| :------------------- | :---------------------- | :------------------------------------- |
| `model` </br> `year` </br> `color` </br> `status` </br> `buyValue` </br> `doorsQty` </br> `seatsQty` | `string` </br> `number` </br> `string` </br> `boolean` </br> `number` </br> `number` </br> `number`  | **Atenção:** o campo status não é obrigatório |

<details>
  <summary>Exemplo de estrutura do <code>body</code> </summary>

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

</details>

<details>
  <summary>A resposta com status <code>201</code></summary>

```json
  {
    "id": "6348513f34c397abcad040b2",
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.990,
    "doorsQty": 4,
    "seatsQty": 5
  }
```

</details>
</br>

#### Listas carros

```http
GET /cars
```

<details>
<summary>Resposta com status <code>200</code></summary>

```json
  [
    {
      "id": "634852326b35b59438fbea2f",
      "model": "Marea",
      "year": 2002,
      "color": "Black",
      "status": true,
      "buyValue": 15.99,
      "doorsQty": 4,
      "seatsQty": 5
    },
    {
      "id": "634852326b35b59438fbea31",
      "model": "Tempra",
      "year": 1995,
      "color": "Black",
      "buyValue": 39,
      "doorsQty": 2,
      "seatsQty": 5
    }
  ]
```

</details>

#### Listar carro por ID

```http
GET /cars/:id
```

<details>

  <summary>Resposta com status <code>200</code></summary>

  ```json
    {
    "id": "634852326b35b59438fbea2f",
    "model": "Marea",
    "year": 2002,
    "color": "Black",
    "status": true,
    "buyValue": 15.99,
    "doorsQty": 4,
    "seatsQty": 5
  }
  ```

</details>

<details>

<summary>Casos de falha</summary>

- Ao tentar passar um ID inexistente no banco de dados - Status Code `404`

```json
{ "message": "Car not found" }
```

- Ao passar um ID inválido - Status Code `422`

```json
{ "message": "Invalid mongo id" }
```

</details>

#### Atualizar carro por ID

```http
PUT /cars/:id
```

<details>
  <summary>Exemplo de estrutura do body</summary>

```json
{
  "model": "Marea",
  "year": 1992,
  "color": "Red",
  "status": true,
  "buyValue": 12.000,
  "doorsQty": 2,
  "seatsQty": 5
}
```

</details>

<details>
  <summary>Resposta com status <code>200</code> </summary>

```json
{
  "id": "634852326b35b59438fbea2f",
  "model": "Marea",
  "year": 1992,
  "color": "Red",
  "status": true,
  "buyValue": 12.000,
  "doorsQty": 2,
  "seatsQty": 5
}
```

</details>

<details>
<summary>Casos de falha</summary>

- Ao tentar passar um ID inexistente no banco de dados - Status Code `404`

```json
{ "message": "Car not found" }
```

- Ao passar um ID inválido - Status Code `422`

```json
{ "message": "Invalid mongo id" }
```

</details>

#### Deletar carro por ID

```http
DELETE /cars/:id
```

<details>
  <summary>Resposta com status <code>204</code></summary>

  ```json
  {}
  ```

</details>

<details>
  <summary>Resposta com status <code>404</code></summary>

  ```json
  {
    "message": "Car not found"
  }
  ```
</details>
### :motorcycle: Motocicletas

#### Cadastrar motocicletas

```http
POST /motorcycles
```

| Parâmetro            | Tipo                    | Descrição                              |
| :------------------- | :---------------------- | :------------------------------------- |
| `model` </br> `year` </br> `color` </br> `status` </br> `buyValue` </br> `category` </br> `engineCapacity` | `string` </br> `number` </br> `string` </br> `boolean` </br> `number` </br> `string` </br> `number`  | **Atenção:** o campo status não é obrigatório |

<details>
  <summary>Exemplo de estrutura do <code>body</code> </summary>

```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```

</details>

<details>
  <summary>A resposta com status <code>201</code></summary>

```json
{
  "id": "6348513f34c397abcad040b2",
  "model": "Honda Cb 600f Hornet",
  "year": 2005,
  "color": "Yellow",
  "status": true,
  "buyValue": 30.000,
  "category": "Street",
  "engineCapacity": 600
}
```

</details>
</br>

#### Listas motocicletas

```http
GET /motorcycles
```

<details>
<summary>Resposta com status <code>200</code></summary>

```json
[
  {
    "id": "634852326b35b59438fbea2f",
    "model": "Honda Cb 600f Hornet",
    "year": 2005,
    "color": "Yellow",
    "status": true,
    "buyValue": 30.000,
    "category": "Street",
    "engineCapacity": 600
  },
  {
    "id": "634852326b35b59438fbea31",
    "model": "Honda Cbr 1000rr",
    "year": 2011,
    "color": "Orange",
    "status": true,
    "buyValue": 59.900,
    "category": "Street",
    "engineCapacity": 1000
  }
]
```

</details>

#### Listar motocicleta por ID

```http
GET /motorcycles/:id
```

<details>

  <summary>Resposta com status <code>200</code></summary>

 ```json
 {
   "id": "634852326b35b59438fbea31",
   "model": "Honda Cbr 1000rr",
   "year": 2011,
   "color": "Orange",
   "status": true,
   "buyValue": 59.900,
   "category": "Street",
   "engineCapacity": 1000
 }
```

</details>

<details>

<summary>Casos de falha</summary>

- Ao tentar passar um ID inexistente no banco de dados - Status Code `404`

```json
{ "message": "Motorcycle not found" }
```

- Ao passar um ID inválido - Status Code `422`

```json
{ "message": "Invalid mongo id" }
```

</details>

#### Atualizar motocicleta por ID

```http
PUT /motorcycles/:id
```

<details>
  <summary>Exemplo de estrutura do body</summary>

```json
{
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true,
  "buyValue": 45.000,
  "category": "Street",
  "engineCapacity": 600
}
```

</details>

<details>
  <summary>Resposta com status <code>200</code> </summary>

```json
{
  "id": "634852326b35b59438fbea2f",
  "model": "Honda Cb 600f Hornet",
  "year": 2014,
  "color": "Red",
  "status": true,
  "buyValue": 45.000,
  "category": "Street",
  "engineCapacity": 600
}
```

</details>

<details>
<summary>Casos de falha</summary>

- Ao tentar passar um ID inexistente no banco de dados - Status Code `404`

```json
{ "message": "Motorcycle not found" }
```

- Ao passar um ID inválido - Status Code `422`

```json
{ "message": "Invalid mongo id" }
```

</details>

#### Deletar motocicleta por ID

```http
DELETE /motorcycles/:id
```

<details>
  <summary>Resposta com status <code>204</code></summary>

  ```json
  {}
  ```

</details>

<details>
  <summary>Resposta com status <code>404</code></summary>

  ```json
  {
    "message": "Motorcycle not found"
  }
  ```
</details>

### Autor
[@pedroygor](https://github.com/pedroygor)