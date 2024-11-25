const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const filePath = path.join(__dirname, "./assets/dataProveedores.json");

///middleware para parsear JSON
app.use(bodyParser.json());

///the ruta para obtener todos los proveedores
app.get("/api/proveedores", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return res.status(500).send("Error leyendo el archivo de proveedores.");
    }
    res.json(JSON.parse(data));
  });
});

///la ruta
app.post("/api/proveedores", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return res.status(500).send("Error leyendo el archivo de proveedores.");
    }

    const proveedores = JSON.parse(data || "[]");
    const nuevoProveedor = req.body;

    ///validamos algunos datos
    if (
      !nuevoProveedor.ruc ||
      !nuevoProveedor.nombre ||
      !nuevoProveedor.email
    ) {
      return res
        .status(400)
        .send("Faltan campos obligatorios (ruc, nombre, email).");
    }

    ///validar que no se peritan
    const existeProveedor = proveedores.some((proveedor) => {
      return (
        proveedor.ruc === nuevoProveedor.ruc ||
        proveedor.email === nuevoProveedor.email ||
        proveedor.telefono === nuevoProveedor.telefono
      );
    });

    if (existeProveedor) {
      return res
        .status(400)
        .send("Ya existe un proveedor con el mismo RUC, email o teléfono.");
    }

    proveedores.push(nuevoProveedor);

    fs.writeFile(filePath, JSON.stringify(proveedores, null, 2), (err) => {
      if (err) {
        console.error("Error al escribir en el archivo:", err);
        return res
          .status(500)
          .send("Error escribiendo en el archivo de proveedores.");
      }
      res.status(201).send("Proveedor agregado correctamente.");
    });
  });
});

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
