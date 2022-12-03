 # Introduccion a JS
apuntes, notas e introduccion a JS.
 
 ---
 ---
 
 ## COMENTARIOS EN JS. 
 /* */ --> Este tipo de comentario es para varias lineas de comentarios.
 
 // --> Este es para una sola linea de comentario.

---

## Apuntes JS. 
Se considera **lenguaje de programación** cuando un lenguaje tiene variables y funciones. 

* **Varibles:**
    * **var**
        * No puedes crear una variable con nombre 'var'. ¡Error!
    * **let**
        * Puedes inicializar la variable sin valor. 
        * Puedes asignarle un valor y luego cambiar su valor.
    * **const**
        * No puedes inicializar una variable sin valor. ¡Error! 
        * Puedes inicializarlo con let y luego cambiarlo a const, esto si desconoces su valor. 
        * No puedes reacignarle el valor. 

JS es un lenguaje de tipo **dinámico**: 
Puedes asignar una variable cómo "string" y después reasignarle un valor "booleano".

Las variables pueden contener en el nombre números pero no pueden iniciar con un numero. 
* Ejemplo: 
    * objeto1 (CORRECTO)
    * 1objeto (¡ERROR! Esa sintaxis NO ES VALIDA.)
    * -disponible (¡ERROR! Esa sintaxis NO ES VALIDA.)
    * _disponible (CORRECTO)

JS **si hace diferencia** entre mayusculas y minusculas en las variables, en las funciones y en todo. Es diferente las variable 'producto' y 'Producto'

---

Con **"typeof"** puedes conocer el tipo de dato que tiene una variable. Si es string, booleano, objeto, etc. 

console.log (typeof producto); 

Si quieres poner comillas dobles cómo en pantalla de 12" puedes poner: 

'Monitor de 20" ' --> Usando comillas simples. 
"Monitor de 20¨\" --> Usando una diagonal invertida para escapar esa comilla. 
