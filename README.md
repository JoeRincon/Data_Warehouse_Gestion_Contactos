<h1>Data Warehouse</h1> 

# Consigna
Desarrollo de una herramienta para administrar todos los contactos de sus clientes para sus campañas; en una compañia de marketing
=> Modo Freelance

<h1>Repositorio</h1> 

(https://github.com/JoeRincon/Data_Warehouse_Gestion_Contactos.git)

<h1>Herramientas usadas</h1>

* NodeJS
* SQL
* npm: express, sequelize, jsonwebtoken, nodemon, body-parser, exceljs, helmet, bcrypt
* Swagger // documentacion API
* Bootstrap
* HTML, Saas, CSS

<h1>Configuracion del servidor</h1>
Puerto: 3030
Descripción: Usar express para la configuración del servidor

<h1>Paso a paso para su funcionamiento </h1>

1. Contar con XAMPP u otra solución de servidor web para la conexión de la base de datos e inicializar dicho servidor.

2. Desde la consola de mysql; crear una base de datos con el nombre : "datawarehouse".

3. Ejecutar el comando "npm install" para instalar todas las dependencias del proyecto. Se pueden validar en el archivo package.json

4. En la ruta /config/config.js validar la siguiente parametrizacion, usar estos valores: 

 config: {
        username:'root', 
        password: '',
        databaseName:'datawarehouse',
        host: 'localhost',
        port: '3030',
        secret_Key: 'bed061a389ad9c079417d78831d3d64c02bbcf5abc1c847ceb5cca53197b615fc2289bfc41434541dedae42b0200bcdf61b1214d7d1111aa6df7de52eba02bcd'
    }

5. Cambiar /back/database/fill_database y ejecutar por consola "node data.js" este archivo realiza el llenado de la base de datos.

6. Desde el archivo raiz del proyecto ejecutar el comando "npm run dev" esto inicia el servidor; tambien se puede cambiar a la ruta /back y ejecutar el comando "nodemon server.js"

7. Desde VScode navegue la la ruta /front/html/login.html; desde el cuerpo del archivo login.html con clic derecho ejecute la opcion "Open with live server". Asi obtendra vista del login de la aplicacion para realizar el ingreso con los usuarios correspondientes.

8. Puede ingresar a la aplicacion con alguno de estos usuarios: 
<h3>usuarios estandar</h3>
{
        name: "prueba1",
        lastname: "prueba",
        email: "prueba1@test.com",
        password: "123456",
    },
    {
        name: "prueba2",
        lastname: "prueba",
        email: "prueba2@test.com",
        password: "123456",
    }
<h3>usuarios administradores</h3>
{
        name: "super101",
        lastname: "admin101",
        email: "super101@admin.com",
        password: "*/789",
    },
    {
        name: "super102",
        lastname: "admin102",
        email: "super102@admin.com",
        password: "*/789",
    }

9. Esta listo para validar los diferentes CRUD de las entidades y la funcionalidades de la gestion de contactos.
