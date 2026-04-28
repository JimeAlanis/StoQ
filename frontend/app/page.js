"use client";

import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";

export default function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await fetch("http://localhost:3000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleNewProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const handleDelete = async (id) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    setProducts((prev) => prev.filter((p) => p.id_producto !== id));
  } else {
    alert("Error al eliminar producto");
  }
};

  return (
    <div style={{ padding: "20px" }}>
      <h1>Productos</h1>

      <ProductForm onProductCreated={handleNewProduct} />

      {products.map((p) => (
        <div key={p.id_producto} style={{ marginBottom: "10px" }}>
          {p.nombre} - ${p.precio}

          <button
            onClick={() => handleDelete(p.id_producto)}
            style={{ marginLeft: "10px" }}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}