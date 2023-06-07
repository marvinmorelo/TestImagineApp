
// 1. Escribir una función que recibe un arreglo de strings y retornar un arreglo con la longitud de cada
// string

const stringsLength = (arr) => arr.map((word) => word.length);

const wordsArray = ["Hello", "Marvin", "How", "Are", "You"];
const stringsLengthArray = stringsLength(wordsArray);
console.log(stringsLengthArray);


// 2. Escribir una función que encuentre un número en un arreglo de números de la forma más eficiente
// posible. El arreglo de números de entrada puede estar desordenado.

const searchNumber = (arr, item) => arr.includes(item);

const numbersArray = [40, 28, 14, 3, 2, 16, 3, 1, 0, 7, 546, 23];
console.log(searchNumber(numbersArray, 23));


//3. Escribir una función que al ser llamada saludo(‘Hola’)(‘Mundo’) imprima el texto ‘Hola Mundo’. Ojo,
//la función se debe ejecutar tal cual saludo(‘Hola’)(‘Mundo’), no hay error al escribir este enunciado.

const greeting = (greet) => (name) => console.log(greet + ' ' + name);
greeting('Hello')('World');
greeting('Hola')('Marvin');


/*
4. Explique qué significa en sus propias palabras: Function.prototype.bind

Function.prototype.bind es un metodo que permite cambiar el valor de THIS dentro de un contexto,
permite tambien pasar argumentos prestablecidos, lo cual puede ser útil en diversas situaciones 
donde se requiere controlar el contexto de ejecución de una función.

5. ¿Qué es la coerción en Javascript?

La coerción en JavaScript es el proceso automático de conversión de un valor de un tipo de dato a otro 
tipo de dato durante una operación
ejemplo:
*/
let age = 42;
let message = "Marvin tiene: " + age +" años";

console.log(message);

/* el numero se convirtio en un string automaticamente

6. ¿Qué es una IIFE (Immediately Invoked Function Execution)? Escribe un ejemplo.

 Es una construcción en JavaScript que permite declarar y ejecutar una función de manera inmediata.
 Sirven para modularizar y proteger el código en JavaScript, ya que evitan  la colisión de nombres 
 de variables y funciones en el ámbito global y permiten un control más preciso  sobre el alcance de 
 las variables y funciones declaradas dentro de ellas.

*/
(() =>{
    let msg = "Hola, mundo!";
    console.log(msg);
  })();

 /* 7. ¿Cuál es la diferencia entre una variable que es: null, undefined o undeclared? ¿Cómo se verifica cada
uno de estos estados?

NULL
es un valor asignado explícitamente para indicar la ausencia intencional de un valor.
se utiliza el operador de igualdad estricta (===) para comparar si una variable es igual a null.

UNDEFINED
indica que una variable está declarada pero no tiene un valor asignado.
se utiliza el operador de igualdad estricta (===) para comparar si una variable es igual a undefined.

UNDECLARED 
ocurre cuando se intenta acceder a una variable que no ha sido declarada y genera un error de referencia.
No se puede verificar directamente pero se puede inferir ya que generará un error de referencia 
al intentar acceder a ella.


8. ¿Cuáles son los principales componentes de Angular?

los principales componente de Angular son:
Modulos
Componentes
Plantillas
Directivas
Servicios
Data Binding
Routing
Inyeccion de dependencias


9. ¿Qué es un JSX?

JSX (JavaScript XML) es una extensión de sintaxis utilizada en React, para construir interfaces 
de usuario. JSX permite escribir código HTML similar en JavaScript, lo que facilita la creación 
de componentes de interfaz de usuario de manera declarativa.


10. ¿Qué es el state en Angular? Que hace el método render?

El estado en Angular sirve para el desarrollo de aplicaciones dinámicas e interactivas. 
Permite mantener y manipular datos, reaccionar a eventos y proporcionar una experiencia de usuario 
fluida y actualizada. Al comprender y gestionar adecuadamente el estado en Angular, puedes construir 
aplicaciones más robustas y eficientes.

El método render en Angular se utiliza para forzar una nueva representación de la vista en situaciones 
excepcionales donde se requiere un control manual sobre la actualización de la vista del componente.

11. ¿Cómo funciona el router en Angular?

El router en Angular es un módulo que permite gestionar la navegación en una SPA 
(Aplicacion de una sola pagina). Permite cambiar dinámicamente la URL y cargar diferentes componentes 
en función de la ruta actual.
*/