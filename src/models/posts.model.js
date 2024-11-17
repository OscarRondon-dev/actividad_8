const db = require("../config/db");


function deletePostsByAutorId(autorId) {
    return db.query('DELETE FROM posts WHERE autor_id = ?', [autorId]);
}

function selectPostByautorId(autorid) {
    return db.query("SELECT * FROM posts WHERE autor_id = ?", [autorid]);
    }
function selectAllPosts() {
  return db.query("SELECT * FROM posts");
}

function selectPostById(autorid) {
  return db.query("SELECT * FROM posts WHERE id = ?", [autorid]);
}

function selectPostByautorId(autorid) {
  return db.query("SELECT * FROM posts WHERE autor_id = ?", [autorid]);
}

function insertPost({ titulo, descripcion, fecha_creacion, categoria, autor_id }) {
  return db.query(
    "INSERT INTO posts (titulo, descripcion, fecha_creacion, categoria, autor_id) VALUES (?, ?, ?, ?, ?)",
    [titulo, descripcion, fecha_creacion, categoria, autor_id]
  );
}
function updatePost(postId, { titulo, descripcion, fecha_creacion, categoria, autor_id }) {
  return db.query("UPDATE posts SET titulo = ?, descripcion = ?, fecha_creacion = ?, categoria = ?, autor_id = ?", [titulo, descripcion, fecha_creacion, categoria, autor_id]);
}  

function deletePost(postId) {
  return db.query("DELETE FROM posts WHERE id = ?", [postId]);
}
module.exports = {  deletePostsByAutorId, selectAllPosts, selectPostById, insertPost, updatePost, deletePost, selectPostByautorId };