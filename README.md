# Introducción
¡Bienvenido! En este proyecto se hará una aplicación sencilla con paginación donde se consultará un API de colores, y al seleccionar uno de ellos podrás copiarlo en tu portapapeles.

El API siempre regresa una respuesta en JSON. La URL es la siguiente:

    https://reqres.in/api/colors

Se puede solicitar la siguiente página utilizando el parámetro  `?page=2`.

Si quieres ver el resultado sin más puedes  ejecutarlo desde el servidor de Netlify: [https://color-vuejs-frannier.netlify.com/](https://color-vuejs-frannier.netlify.com/)

## Vista principal de colores
![enter image description here](https://i.ibb.co/0B6RrfR/wireframe-colores-1.png)

## Vista al copiar uno
![enter image description here](https://i.ibb.co/MZs4JrT/wireframe-colores-2.png)

# Elaboración
Para el ejercicio planteado se puede utilizar cualquier tecnología de front end o framework. En este caso se usó Vue.js

¿Por qué Vue? La complejidad del proyecto no es tan alta como para requerir Angular o React, además de que es la oportunidad de usar algo diferente, liviano y aprender de ello.

Para este proyecto se usaron las siguientes librerías (las cuales fueron guardadas localmente pero están disponibles desde npm):
- Vue.js (Para binding de las variables y funcionalidad en general)
[Página oficial](https://vuejs.org/)
- Vuetify (Para dar una impresión de material design y aplicar estilos)
[Página oficial](https://vuetifyjs.com/en/)
- Axios (Para peticiones al API)
[Página oficial](https://github.com/axios/axios)

## Estructura
El proyecto está construido con la siguiente estructura, donde en la carpeta "css" se encontrarán los estilos, en "js" las librerías de Javascript, en "src" el código de la aplicación, en "test" las pruebas unitarias en caso de que existieran y por fuera de las carpetas el index.html:

![enter image description here](https://i.ibb.co/FY09Pjk/Annotation-2019-09-25-065423.png)

# ¿Cómo ejecutarlo?
Descarga la aplicación, ponla en algún servidor de http y pruébala. Puedes utilizar alguna herramienta como Caddy ([link](https://www.google.com/search?q=caddy%20http&oq=caddy%20&aqs=chrome.1.69i57j69i59j0l3j69i60.2393j1j4&sourceid=chrome&ie=UTF-8)), Node.js HTTP Module ([link](https://www.w3schools.com/nodejs/nodejs_http.asp)), etc.

También puedes ejecutarlo desde el servidor de Netlify:
[https://color-vuejs-frannier.netlify.com/](https://color-vuejs-frannier.netlify.com/)

# Resultado final
![enter image description here](https://i.ibb.co/jDDyX4q/Annotation-2019-09-25-065423.png)

![enter image description here](https://i.ibb.co/0ffqmN4/Annotation-2019-09-25-0654232.png)

**[¡Proyecto disponible en Github!](https://github.com/frannier/Colors-Vue.js)** 
