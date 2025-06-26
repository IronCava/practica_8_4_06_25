# 🧩 Laboratorio Vistas EJS – Ironhack

Este proyecto es una práctica obligatoria del módulo **MF0492_3 – Programación web en entorno servidor**. Su objetivo es demostrar el uso correcto de **Node.js**, **Express**, **EJS**, layouts, parciales y vistas dinámicas.

---

## 📁 Estructura del proyecto

```
practica_8_4_06_25/
├── server.js
├── package.json
├── views/
│   ├── layout.ejs
│   ├── index.ejs
│   ├── productos.ejs
│   ├── contacto.ejs
│   ├── producto.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
├── public/
│   └── css/
│       └── style.css
```

---

## 🚀 Tecnologías usadas

- Node.js
- Express
- EJS (motor de plantillas)
- express-ejs-layouts
- HTML/CSS

---

## 🔧 Cómo se implantó

1. **Inicialización del proyecto**
   ```bash
   npm init -y
   npm install express ejs express-ejs-layouts
   ```

2. **Configuración de Express y EJS**
   - Se creó `server.js` configurando EJS como motor de vistas
   - Se activó `express-ejs-layouts` y se definió un layout base

3. **Diseño compartido**
   - `layout.ejs` se utiliza como plantilla principal
   - `header.ejs` y `footer.ejs` incluidos como parciales

4. **Rutas principales**
   - `/`: Inicio
   - `/productos`: Lista de productos (datos simulados)
   - `/producto/:id`: Ruta dinámica con detalle de producto
   - `/contacto`: Formulario de contacto

5. **Vista dinámica con EJS**
   - Se creó un array de objetos con productos en `server.js`
   - Se renderiza cada producto individual desde una sola vista `producto.ejs`

---

## 📦 Instalación local

```bash
git clone https://github.com/tu_usuario/tu_repositorio.git
cd practica_8_4_06_25
npm install
node server.js
```

Visita: `http://localhost:3000`

---

## 🗓️ Fecha de entrega

26/06/2025
