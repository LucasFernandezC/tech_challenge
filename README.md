## Descripción de la funcionalidad

El presente proyecto es el front end de un e-commerce. Toma la información que entrega la API https://fakestoreapi.com/products y la presenta en pantalla a modo de cards. Cada card tiene un botón que nos lleva al detalle del producto donde podemos ver todas sus características y tenemos dos botones de acción. Uno para agregar al carrito de compras y otro para regresar al listado de productos.
Adicionalmente, se disponibiliza una barra de busqueda que filtra por título y categoría.
Por último, tenemos a nivel de Header el logo ficticio de la compañia que nos lleva al home, un breadcrumbs y el widget del carro de compras.

## Como clonar el proyecto

En caso de querer copiar el proyecto y utilizarlo de base, realizar los siguientes pasos:

- git clone https://github.com/LucasFernandezC/tech_challenge.git
- Posicionarse desde la terminal en la carpeta donde descargamos el proyecto y ejecutar NPM I para instalar las dependencias.
- Levantar el servidor con el comando NPM START

## Características relevantes del proyecto

Durante el desarrollo de la aplicación se buscó generar código que pueda ser reutilizable y que sea lo más simple posible para su lectura y mantenimiento.

Otra de las premisas del proyecto era que el sitio sea responsive, cosa que se logró en base a la utilización de clases de Bootstrap y algunas adecuaciones puntuales realizadas con CSS y MediQuery.

Al utilizar LINK pudimos mantener la idea de una SPA sin necesidad de recargar el sitio en ningun momento.

## Stack tecnológico

La aplicación se desarrollo en JavaScript con las siguientes librerías:

- React
- Moment
- Bootstrap

Para mantener la idea de una SPA se utilizó React Router Dom con todos sus hooks.
Se implementó un Context para el manejo de la información desde cualquier página del sitio.
Para optimizar el funcionamiento se almacena en el local storage del cliente la información obtenida al realizar el call a la API de listado de productos. Esta sera persistente por un lapso de una hora, momento en el que se volverá a consultar al endpoint para actualizarla.
