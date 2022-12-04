//String ó Cadenas de Texto

//Este es un string (MÁS COMUN)
const producto = "Monitor de 20 pulgadas";
//Este es un string(POCO COMUN)
const producto2 = String('Monitor de 30 pulgadas');
//Este es un "objeto" por el constructor "new" (POCO COMUN)
const producto3 = new String ('Monitor de 50 pulgadas'); 


console.log (producto); 
console.log (producto2); 
console.log (producto3);

console.log (typeof producto); 
console.log (typeof producto2); 
console.log (typeof producto3);

//console.log es una función porque le estás enviando una variable y la función la está imprimiento. Al poner un ".lengh" es un método. Los espacios también son caracteres.
console.log (producto.length);

//Método: IndexOf (RETORNA POSICIÓN)
console.log(producto.indexOf('pulgadas'))
console.log(producto.indexOf('tablet'))

//Includes (retorna true ó False)
console.log(producto.includes('pulgadas'))
console.log(producto.includes('tablet'))