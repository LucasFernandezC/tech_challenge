## Descripción de la funcionalidad

El presente proyecto es el front end de un e-commerce. Toma la información que entrega la API https://fakestoreapi.com/products y lo presenta en pantalla a modo de cards. Cada card tiene un botón que nos lleva al detalle del producto donde podemos ver todas sus características y tenemos dos botones de acción. Uno para agregar al carrito de compras y otro para regresar al listado de productos. Adicionalmente se disponibiliza una barra de busqueda que filtra por titulo y categoría. Por ultimo tenemos a nivel de Header el logo ficticio de la compañia que nos lleva al home, un breadcrumbs y el widget del carro de compras.

## Como clonar el proyecto

En caso de querer copiar el proyecto y utilizarlo de base, realizar los siguientes pasos:

- git clone https://github.com/LucasFernandezC/tech_challenge.git
- Posicionarse desde la terminal en la carpeta donde descargamos el proyecto y ejecutar NPM I para instalar las dependencias.
- Levantar el servidor con el comando NPM START

## Características relevantes del proyecto

Durante el desarrollo de la aplicación se buscó generar código que pueda ser reutilizable y que sea lo mas simple posible para su lectura y mantenimiento.

Otra de las premisas del proyecto era que el sitio sea responsive, cosa que se logró en base a la utilización de clases de Bootstrap y algunas adecuaciones puntuales realizadas con CSS y MediQuery.

Al utilizar LINK pudimos mantener la idea de una SPA sin necesidad de recargar el sitio en ningun momento.
