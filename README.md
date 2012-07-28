AppPrestamos
============

Aplicación para el manejo, y recordatorio, de préstamo de cosas personales. Si deseas ver la funcionalidad básica
en más detalle puedes revisar el [documento de ideas](https://github.com/Trisfera/AppPrestamos/wiki/Ideas).

Status
------

Pendiente...

Cómo está estructurada la aplicación?
-------------------------------------

La aplicación la vamos a dividir en dos secciones principales: Los servicios y los clientes.

###Servicios

Son utilizados para consultar, almacenar y modificar información de los diferentes préstamos. Van a estar albergados en 
un servidor para poder ser accesados por los clientes. Todo lo referente a los servicios (por ejemplo, el código) se 
encuentra en este repositorio. **La documentación de los servicios la pueden encontrar [aquí](https://github.com/Trisfera/AppPrestamos/wiki/Servicio-REST-with-JSON)**.

###Clientes

Es cualquier interfaz mediante la cual una persona puede interactuar con nuestra aplicación. Algunos ejemplos serían 
una página web o una aplicación android. Ambas son intefaces que se conectan con los servicios. Cada cliente se va a 
desarrollar de manera independiente y tendrán su propio repositorio. Los siguientes clientes están en desarrollo:

[AppPrestamosBackbone](https://github.com/Trisfera/AppPrestamosBackbone) : Página Web que se conecta con los servicios 
por medio de javascript.

En qué se van a desarrollar los Servicios?
------------------------------------------

Vamos a estar trabajando con Node.js, pueden encontrar más información en su [sitio](http://nodejs.org/)

Quieres correr este proyecto en tu máquina?
-------------------------------------------

Pendiente...

Quieres colaborar?
------------------

Estos son los pasos a aseguir:

- Haz un Fork
- Clona el proyecto (que se encuentra en tu Fork) a tu máquina
- Modifica/crea los archivos para realizar tu aporte y haz los commits a tu Fork
- Haz un Pull Request para integrar tus cambios a este repositorio

Para aprender a hacer todo lo anterior, puedes seguir [esta guía](https://github.com/Trisfera/Trisfera/wiki/Git-y-Github).

Tienes algún Bug o Feature Request?
-----------------------------------

Por favor añádelo en los [issues del repositorio] (https://github.com/Trisfera/AppPrestamos/issues?state=open).
Si tienes dudas de cómo hacer esto, o si quieres preguntarnos algo lo puedes hacer por medio de [twitter](https://twitter.com/Trisfera) o por [facebook](https://www.facebook.com/groups/trisfera/)


