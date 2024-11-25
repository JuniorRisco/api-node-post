# Proyecto Proveedores - API en Node.js

Este es un proyecto backend simple que utiliza **Node.js** con el framework **Express** para crear una API REST que gestiona proveedores. Los datos se almacenan en un archivo JSON.

## Requisitos

Asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (Recomendado: LTS)
- [npm](https://www.npmjs.com/) (viene con Node.js)

## Instalación

1. **Clona el repositorio**:

   Si aún no has descargado el proyecto, clónalo desde GitHub:

   ```bash
   git clone https://github.com/JuniorRisco/api-node-post.git

   ```
2. **Acceder al proyecto**:
   ```bash
   cd proyecto-proveedores
   ```

3. **Instala las dependencias**:
**Instala Express y body-parser**:
```bash
   npm install express body-parser

```

4. **Ejecuta en el servidor del api**:

```bash

node server.js

```
5. **Ejemplo de Datos**:
   Aquí tienes un ejemplo de los datos de un proveedor que se almacenan en un archivo JSON:
```bash

  {
    "ruc": "123456781",
    "nombre": "Junior Risco",
    "email": "riscotest@example.com",
    "telefono": "987654922",
    "direccion": "Calle Falsa 123",
    "categoria": "Fungicidas",
    "fechaRegistro": "2024-11-24",
    "estado": "Activo"
  }



```
