# Tech test para el back end - Multiplica Talent

## Colores

Colores es una API creada para brindar un listado de colores usados en un proyecto y poder copiarlos de forma rápida.

### Tecnologías usadas

- ExpressJS como framework de Nodejs para el backend.
- Nodemon para agilizar el desarrollo
- Heroku para el deploy de la API.
- MongoDB con Mongoose como ORM para guardar la informacion.

### Cómo usar colores de forma local

Si quieres usar Colores de forma local, asegúrate de tener npm instalado. Si los tienes, solo debes clonar este repositorio en tu computadora. Una vez clonado, abre en tu terminal en el directorio en el que se encuentra el proyecto, y corre el comando:

```shell
npm install
```

Esto instalará las dependecias necesarias para ejecutar el proyecto. Luego de que estén instaladas, puedes iniciar la API en forma local haciendo:

```shell
npm start
```

ó

```shell
yarn start
```

### Quiero llamar a la API en línea

Colores está lanzada en línea a través de [Heroku](https://www.heroku.com/). Puedes llamadas a la API con el siguiente enlace:

```shell
https://colores-api.herokuapp.com/
```

#### Endpoints disponibles

- GET /colores -> Recibe parametros de paginación de la siguiente forma: https://colores-api.herokuapp.com/colores?page=1
- GET /colores/:id -> Para recibir información de un color en específico
- POST /colores -> Para subir nuevos colores.
