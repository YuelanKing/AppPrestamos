AppPrestamos
============
Aplicación para el manejo y recordatorio de préstamos.

Qué queremos lograr?
--------------------
¿Te ha pasado que prestas plata y luego no consigues que te la paguen de vuelta? 

¿Alguna vez has prestado un libro, una calculadora o algún otro objeto y luego se te olvidó a quién se lo prestaste?

Estos son algunos de [los casos de uso](https://github.com/Trisfera/AppPrestamos/wiki/Ideas) que queremos resolver con esta aplicación.

Además, como con todo proyecto de [Trisfera](http://trisfera.com), queremos aprender algo nuevo. En este caso queremos aprender cómo:

- Desarrollar un [REST API](http://es.wikipedia.org/wiki/Representational_State_Transfer) con [Node.js](http://nodejs.org/)
- Desarrollar un cliente web con [Backbone.js](http://backbonejs.org/)
- Desarrollar clientes móviles para Android y iOS
- Escribir Javascript utilizando [CoffeeScript](http://coffeescript.org/)
- Escribir CSS utilizando [LESS](http://lesscss.org/)
- Colaborar como comunidad para el desarrollo de un proyecto open source

Quieres correr este proyecto en tu máquina?
-------------------------------------------
Primero debes:

- [Instalar Node.js](https://github.com/Trisfera/Trisfera/wiki/Instalar-Node.js)
- [Instalar MongoDB](https://github.com/Trisfera/Trisfera/wiki/Instalar-MongoDB)

Luego debes descargar el código, entrar a la carpeta del proyecto y correr:
```
npm start
```
Podrás acceder a la aplicación en la dirección [http://localhost:3000](http://localhost:3000)

Para correr las pruebas automatizadas, debes escribir este comando:
```
npm test
```

Y luego acceder a la dirección [http://localhost:9292](http://localhost:9292)

Quieres colaborar?
------------------
Estos son los pasos a aseguir:

- Haz un Fork
- Clona el proyecto (que se encuentra en tu Fork) a tu máquina
- Modifica/crea los archivos para realizar tu aporte y haz los commits a tu Fork
- Haz un Pull Request para integrar tus cambios a este repositorio

Para aprender a hacer todo lo anterior, puedes seguir [esta guía](https://github.com/Trisfera/Trisfera/wiki/Introducci%C3%B3n-a-Git-y-Github).

### Bug o Feature Request?
Por favor añádelo en los [issues del repositorio](https://github.com/Trisfera/AppPrestamos/issues?state=open).

### Duda, consulta, sugerencia?
Contáctanos por [twitter](https://twitter.com/Trisfera) o únete a [nuestro grupo de Facebook](https://www.facebook.com/groups/trisfera/)

Cómo está estructurada la aplicación?
-------------------------------------
La aplicación la vamos a dividir en dos secciones principales: el servicio y los clientes.

###Servicio

Maneja la "lógica de negocio": crear nuevos préstamos, consultar préstamos existentes, etc. El servicio expondrá un REST API y toda la data será enviada en formato JSON. Nuestro objetivo es hacer el API lo más sencillo posible para que sea fácil de consumir para los clientes.

Todo lo referente al servicio se encuentra en este repositorio. **La documentación del servicio la pueden encontrar [aquí](https://github.com/Trisfera/AppPrestamos/wiki/Servicio-REST-with-JSON)**.

###Clientes

Es cualquier interfaz mediante la cual una persona puede interactuar con el servicio. Algunos ejemplos serían una página web o una aplicación Android.

El cliente web se encuentra en este repositorio, en la carpeta `app/ui`. Los clientes móviles se van a desarrollar de manera independiente y tendrán sus propios repositorios.

En qué está hecho?
------------------
El servicio está siendo desarrollado con [Node.js](http://nodejs.org/) y [Express Framework](http://expressjs.com/). Además, usamos [MongoDB](http://www.mongodb.org/) como base de datos y [Mongoose](http://mongoosejs.com/) como nuestro ODM.

El cliente web utiliza [Backbone.js](http://backbonejs.org/), pero escrito en [CoffeeScript](http://coffeescript.org/). Para escribir CSS se utiliza [LESS](http://lesscss.org/) y aún estamos considerando si utilizar o no una librería como [Twitter Bootstrap](http://twitter.github.com/bootstrap/).