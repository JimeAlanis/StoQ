const pool = require('../config/db');

const getProducts = async () => {
  try {
    const result = await pool.query('SELECT * FROM producto');
    return result.rows;
  } catch (error) {
    console.error('ERROR EN SERVICE:', error);
    throw error;
  }
};

const createProduct = async (nombre, descripcion, precio) => {
  const result = await pool.query(
    'INSERT INTO producto (nombre, descripcion, precio) VALUES ($1, $2, $3) RETURNING *',
    [nombre, descripcion, precio]
  );

  return result.rows[0];
};

const updateProduct = async (id, nombre, descripcion, precio) => {
  const result = await pool.query(
    'UPDATE producto SET nombre = $1, descripcion = $2, precio = $3 WHERE id_producto = $4 RETURNING *',
    [nombre, descripcion, precio, id]
  );

  return result.rows[0];
};

const deleteProduct = async (id) => {
  await pool.query(
    'DELETE FROM stock WHERE id_producto = $1',
    [id]
  );

  await pool.query(
    'DELETE FROM detalle WHERE id_producto = $1',
    [id]
  );

  const result = await pool.query(
    'DELETE FROM producto WHERE id_producto = $1 RETURNING *',
    [id]
  );

  return result.rows[0];
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
};
