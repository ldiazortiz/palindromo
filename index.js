/*Crea una función que permita comprobar si un string es un palíndromo. Un
palíndromo es una palabra o frase que se lee igual de izquierda a derecha
que de derecha a izquierda. Ahora haz la misma comprobación pero con un
array de strings.*/

//Con el uso de un modal, pedimos al usuario que escriba la palabra o frase a ser evaluada
const posiblePalindromo = prompt(
  "Escribe la palabra que quieres saber si es palíndromo"
);
//Esta instrucción escribe en el HTML lo que el usuario escribió en el modal, "demo-palindromo" es el id del párrafo del HTML
document.getElementById(
  "demo-palindromo"
).innerHTML = `Escribiste: ${posiblePalindromo}`;

//Aquí defino la variable inversoPosiblePalindromo, utilizo el método reverse junto a la función reverse más abajo la defino
let inversoPosiblePalindromo = reverse(posiblePalindromo);

//En este if lo que hago es comparar las dos variables para ver si son iguales.
// Ahora bien, en JS no es lo mismo mayúsculas y minúsculas y caracteres especiales.
// Hice una búsqueda en GOOGLE y encontré la forma de eliminar espacios,
// cambiar todo a minúsculas para el proceso de comparación.
if (
  posiblePalindromo.replace(/\s+/g, "").toLowerCase() ===
  inversoPosiblePalindromo.replace(/\s+/g, "").toLowerCase()
) {
  //Este alerta sale en el modal si es palíndromo
  alert(`La frase o palabra "${posiblePalindromo}" es un palíndromo`);

  //Aquí escribo en el HTML
  document.getElementById(
    "validacion"
  ).innerHTML = ` Concluimos que "${posiblePalindromo}" es un palíndromo`;
} else {
  //Este alerta sale en el modal si es NO palíndromo
  alert(`La frase o palabra "${posiblePalindromo}" NO un palíndromo`);

  //Aquí escribo en el HTML
  document.getElementById(
    "validacion"
  ).innerHTML = ` Concluimos que "${posiblePalindromo}" NO es un palíndromo`;
}

//Esta es la función reverse
function reverse(s) {
  return s.split("").reverse().join("");
}

console.log(posiblePalindromo.replace(/\s+/g, "").toLowerCase());
console.log(inversoPosiblePalindromo.replace(/\s+/g, "").toLowerCase());

console.log(posiblePalindromo);
console.log(inversoPosiblePalindromo);
