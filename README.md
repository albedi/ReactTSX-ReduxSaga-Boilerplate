# Albedi Application - Boilerplate

Esta es una arquitectura probada para iniciar fácil un proyecto. La documentación estará mezclada entre un mal español y un pesimo inglés, lo primemro para fomentar la documentación en español y lo segundo para no dejar de lado a nuestro amigos que intenten entender mi inglés, por ser nativos de ese idioma o algun otro.\
_This is am easy tested architecture to start one proyect._

* Versión actualizada a ``"react": "^17.0.2"``

## Arquitectura: React-ReduxSaga-Axios

El proyecto tiene un areglo **Redux**-**Saga** y **Axios** para **React**. Siguiento los casos de ejemplo dentro del código se podrá ir creciendo la funcionalidad poco a poco.
_Only needs to follow the stored examples to increase the functionality of your project._

### `index.tsx` The React-Redux Provider

Este archivo tiene el objetivo de encapusar los módulos y brindar el camino para proveerles el Store a cada uno de ellos.
_This file is the Store Provider._

### `App.tsx` Main Routing

Este archivo tendrá la función de hacer el ruteo a demanda de la aplicación.
_This file have the routing function into the application._

## Inicio Module

La organización de carpetas mas recomendada es la de módulos; por lo que, se desarrollará el ejemplo siguiendola.
_Most recomended folder organization is with Modules. We will use it for this example._

### Structure

Los módulos tendran su propia estructura de directorios `src/modules/[module_name]`.\
dentro de cada modulo se encontraran los directorios: `reducers` y .
