const mysql = require('mysql2'); // Importamos el módulo mysql2

const pool = mysql.createPool({  // Creamos un pool de conexiones a la base de datos
    host: 'localhost', // Dirección del servidor de la base
    user: 'root', // Usuario de la base
    password: 'Lucas555', // Contraseña de la base
    port: 3306, // Puerto de la base
    database: 'blog_dragon_ball' // Nombre de la base
});

module.exports = pool.promise(); // Exportamos el pool de conexiones