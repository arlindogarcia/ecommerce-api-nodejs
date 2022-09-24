## Rodando a aplicação
Faça um clone deste repositório e instale no seu ambiente de desenvolvimento
```
https://github.com/arlindogarcia/ecommerce-api-nodejs.git
```

Após clonar o conteúdo, acesse o diretório e execute o comando para a instalação das dependências
```
yarn
```
Após essa instalação execute a aplicação com o comando `yarn dev`. O servidor estará disponível no endereço: `http://localhost:3333`.

## Instalar PostgresSql no docker
```
docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

## Instalar Redis no docker
```
docker run --name redis -p 6379:6379 -d -t redis:alpine
```
