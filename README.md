# crudReact

CRUD simples em React usando o *JSON Server* para simular uma API REST

## Como utilizar

1. instale o nodeJS;
2. abra a pasta do *backend*;
   - execute `npm i` no local do `package.json` (instala as dependencias de desenvolvimento);
   - execute `npm start` para simular uma API REST com *JSON Server*.
3. abra a pasta do *frontend*;
   - execute `npm i` no local do package.json (instala as dependencias de desenvolvimento);
   - execute `npm start` para criar um servidor de teste.
4. digite [http://localhost:3000](http://localhost:3000) no seu navegador e *voilà*.

## Funcionalidades

- Navegar entre os componentes criados utilizando o `React-Router`;
- Fazer um CRUD (*Create Read, Update* e *Delete*) no arquivo JSON localizado na pasta *backend*.

## Desenvolvimento

Aplicação desenvolvida com React.js para o *frontend* e um servidor simulado com *JSON Server* no *backend*.

Os componentes são renderizados através do React DOM e a navegação entre eles foi configurada com o `React-Router`.

O componente [UserCrud.jsx](./frontend/src/components/user/UserCrud.jsx) é o responsável pelas requisições *http* com a utilização de *promisses* do JavaScript. Este componente foi criado com a biblioteca `axios` para *node.js*.
