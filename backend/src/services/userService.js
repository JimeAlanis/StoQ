const pool = require('../config/db');

const loginUser = async (email, password) => {
  const result = await pool.query(
    'SELECT * FROM usuarios WHERE email = $1 AND password = $2',
    [email, password]
  );

  return result.rows[0];
};

module.exports = {
  loginUser
};