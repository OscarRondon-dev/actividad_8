const db = require("../config/db");

function selectAllAutores() {
  return db.query("SELECT * FROM autores");
}

function selectAutorById(autorid) {
  return db.query("SELECT * FROM autores WHERE id = ?", [autorid]);
}

function insertAutor({ nombre, imagen, email }) {
  return db.query(
    "INSERT INTO autores (nombre, imagen, email) VALUES (?, ?, ?)",
    [nombre, imagen, email]
  );
}
function updateAutorById(autorId, { nombre, email, imagen }) {
  return db.query("UPDATE autores SET nombre = ?, email = ?, imagen = ? WHERE id = ?", [nombre, email, imagen, autorId]);
}  

function deleteautor(autorId) {
  return db.query("DELETE FROM autores WHERE id = ?", [autorId]);
}
module.exports = { selectAllAutores, selectAutorById, insertAutor, updateAutorById, deleteautor };
