// Importamos los módulos necesarios
const express = require('express');
const app = express(); // Creamos una instancia de Express
const expressLayouts = require('express-ejs-layouts'); // Para usar layouts con EJS

// -------------------- CONFIGURACIÓN GENERAL --------------------

// Establecemos EJS como motor de plantillas
app.set('view engine', 'ejs');

// Activamos el uso de layouts
app.use(expressLayouts);

// Establecemos el layout base que usaremos (layout.ejs)
app.set('layout', 'layout');

// Servimos archivos estáticos desde la carpeta 'public' (CSS, imágenes, etc.)
app.use(express.static('public'));

// -------------------- Datos simulados de productos (pueden venir luego de una base de datos) 

const productos = [
  { id: 1, nombre: 'Camiseta ecológica', precio: 20, descripcion: 'Hecha de algodón orgánico' },
  { id: 2, nombre: 'Falda de lino', precio: 25, descripcion: 'Fresca y cómoda para el verano' },
  { id: 3, nombre: 'Pantalón cargo', precio: 30, descripcion: 'Con múltiples bolsillos y estilo urbano' }
];

// -------------------- RUTAS PRINCIPALES --------------------

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Inicio' // Pasamos el título a la vista
  });
});

// Ruta para una página de productos
app.get('/productos', (req, res) => {
  res.render('productos', { title: 'Productos', productos });
});


// Ruta para la página de contacto
app.get('/contacto', (req, res) => {
  res.render('contacto', {
    title: 'Contacto'
  });
});

// Ruta dinamica para producto
app.get('/producto/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);

  if (producto) {
    res.render('producto', { title: producto.nombre, producto });
  } else {
    res.status(404).send('Producto no encontrado');
  }
});


// Iniciamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
