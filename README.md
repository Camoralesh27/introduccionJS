 # Introduccion a JS
Resumen: Apuntes, notas e introduccion a JS.
 
 ---
 ---
 
 ## COMENTARIOS EN JS. 
 Forma de colocar comentarios en JS:

 /* */ --> *Este tipo de comentario es para varias lineas de comentarios.*
 
 // --> *Este es para una sola linea de comentario.*

---
---

# Apuntes JS. 
## Variables.
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
    * objeto1 **(CORRECTO)**
    * 1objeto **(¡ERROR! Esa sintaxis NO ES VALIDA.)**
    * -disponible **(¡ERROR! Esa sintaxis NO ES VALIDA.)**
    * _disponible **(CORRECTO)**

JS **si hace diferencia** entre mayusculas y minusculas en las variables, en las funciones y en todo. Es diferente las variable 'producto' y 'Producto'

---
## Typeof.
Con **"typeof"** puedes conocer el tipo de dato que tiene una variable. Si es string, booleano, objeto, etc. 

`console.log (typeof producto);` 

Si quieres poner comillas dobles cómo en pantalla de 12" puedes poner: 

'Monitor de 20" ' --> Usando comillas simples. 

"Monitor de 20¨\" --> Usando una diagonal invertida para escapar esa comilla. 

---
## Función vs. Metodo.
`console.log ( );` es una **función** porque le estás enviando una variable entre los parentesis y la función la está imprimiento. Al poner un "`.lengh`" se convierte en un **método**. Los espacios también son caracteres. 
* Ejemplo: 
    * **Funcion:** `console.log (producto)` 
    * **Método:** `console.log (producto.length)` Aunque en este caso es más una propiedad. Los métodos regularmente tienen "`.length()`"

---
## lenght
```javascript
const producto = "Monitor de 20 pulgadas";
console.log (producto.length); 
```
Da cómo resultado: 22. La cadena de texto tiene 22 caracteres. 


---
## IndexOf
Para encontrar una palabra en una cadena de texto utilizamos **indexOf**. Retorna la posición en la que se encuentra.

```javascript
const producto = "Monitor de 20 pulgadas";
console.log(producto.indexOf('pulgadas'))
console.log(producto.indexOf('tablet'))
```

Cómo resultado del primer `consol.log` da: **14**. Esto significa que en el caracter 14 iniciando de 0 como el primer caracter, se encuentra esta palabra.  

El segundo `consol.log` da: **-1**. Esto porque no encontró la palabra en la cadena de texto. 0 ó más que cero es que si encontró la palabra. 

---
## Includes
Para encontrar si hay o no una palabra en una cadena de texto. Retorna *true* ó *false*.

```javascript
const producto = "Monitor de 20 pulgadas";
console.log(producto.includes('pulgadas'))
console.log(producto.includes('tablet'))
```

