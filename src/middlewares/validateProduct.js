const validateProduct = (req, res, next) => {
  const { nombre, descripcion, precio } = req.body;

  if (!nombre || !descripcion || !precio) {
    return res.status(400).json({
      error: 'Todos los campos son obligatorios'
    });
  }

  if (typeof precio !== 'number') {
    return res.status(400).json({
      error: 'El precio debe ser un número'
    });
  }

  next();
};

module.exports = validateProduct;