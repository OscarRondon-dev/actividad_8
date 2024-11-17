# Actividad 8: Diseño de API con base de datos MySQL

## Objetivos

En esta actividad vamos a repasar los conceptos básicos de la creación de aplicaciones complejas con ExpressJS, así como los diferentes métodos de interacción sobre bases de datos relacionales con MySQL.

La diferencia fundamental de este tipo de bases de datos es el uso de SQL para interactuar con la información, así como las posibilidades que nos ofrecen para poder relacionar los distintos tipos de datos entre sí. Estas acciones deben quedar reflejadas dentro del código que generamos y nos deben permitir acceder a nuestra información sin complicaciones.

## Pautas de elaboración

Para completar de manera correcta esta actividad vamos a crear un proyecto que nos permita gestionar todos los datos de un proyecto de tipo Blog. Para ello se deben completar todas las URLs que nos permitan interactuar con los posts del blog, así como con los autores que los escriben.

Las pautas a seguir son las siguientes:

1. **Definición de las tablas de posts y autores dentro de la base de datos MySQL**:

   - La tabla de posts debe contener los siguientes datos: título, descripción, fecha de creación, categoría y una clave externa para asignar el autor de la misma.
   - La tabla de autores debe contener los siguientes campos: nombre, email, imagen.

2. **Dentro del proyecto Express generado debemos crear todas las URLs necesarias para la obtención y creación de los posts y de los autores**:

   - La URL para cada uno de los modelos debe partir con el prefijo `/api`.

3. **Cada post recuperado debería ir acompañado de todos los datos del autor de este y no solo del identificador que lo define Se debe definir una url que nos permita recuperar los diferentes posts escritos por un autor en concreto**

4. **Se debe definir una url que nos permita recuperar los diferentes posts escritos por un autor en concreto**

### Rutas para Posts

1. **Obtener todos los posts**

   - Método: GET
   - URL: `/api/posts`

2. **Obtener un post por ID**

   - Método: GET
   - URL: `/api/posts/:id`

3. **Crear un nuevo post**

   - Método: POST
   - URL: `/api/posts`

4. **Actualizar un post por ID**

   - Método: PUT
   - URL: `/api/posts/:id`

5. **Eliminar un post por ID**

   - Método: DELETE
   - URL: `/api/posts/:id`

6. **Obtener posts por autor**
   - Método: GET
   - URL: `/api/posts/autor/:autorId`

### Rutas para Autores

1. **Obtener todos los autores**

   - Método: GET
   - URL: `/api/autores`

2. **Obtener un autor por ID**

   - Método: GET
   - URL: `/api/autores/:id`

3. **Crear un nuevo autor**

   - Método: POST
   - URL: `/api/autores`

4. **Actualizar un autor por ID**

   - Método: PUT
   - URL: `/api/autores/:id`

5. **Eliminar un autor por ID**
   - Método: DELETE
   - URL: `/api/autores/:id`

## Extensión y formato

La entrega de la actividad se hará a través de un repositorio subido a GitHub. Hay que tener en cuenta la eliminación del directorio `node_modules` a través del fichero `.gitignore` antes de proceder a subir el proyecto.

La estructura de las tablas debe ser entregada a través de un fichero SQL exportado a partir de la base de datos que usemos.

## Creación de la base de datos

```sql
CREATE DATABASE blog_dragon_ball;
USE blog_dragon_ball;

CREATE TABLE autores (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `imagen` VARCHAR(255)
);

CREATE TABLE posts (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `titulo` VARCHAR(255) NOT NULL,
    `descripcion` TEXT NOT NULL,
    `fecha_creacion` DATETIME NOT NULL,
    `categoria` VARCHAR(255) NOT NULL,
    `autor_id` INT,
    FOREIGN KEY (autor_id) REFERENCES autores(id)
);
```
