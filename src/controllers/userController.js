const userService = require('../services/userService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userService.loginUser(email, password);

    if (!user) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    res.json({ message: 'Login exitoso', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en login' });  }
};

module.exports = {
  login
};