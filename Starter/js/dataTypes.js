/* Existem diversos tipos de dados numa linguagem de programação.

String, number, float, boolean são as mais famosas.

   String: Qualquer caractere, seja letra, número ou especiais. É denominado pelas aspas;
      - Reporesentado por:
      "" // Aspas duplas
      '' // Aspas simples
      `` // Literal ou template strings

   Number: Número, seja ele positivo ou negativo. Diferente do tipo int pode ter casas decimais;
      - Representado por:
      33 // int: Numeros inteiros, positivo ou negativo
      12.3 // float: Numeros reais, que contém casas decimais
      NaN // Not a number
      Infinity // Infinito

   Boolean: Tipo binário, podendo ser verdadeiro OU falso.
      - Representado por;
      False // Falso
      True // Verdadeiro

   Null e undefines: São tipos diferentes.
      -Representado por:
      Null // Um objeto VAZIO. É algo que não tem nada dentro, como uma caixa vazia.
      Undefined // É algo que não existe. Não é nada. Não foi definido.

   Object: São propriedades de algo
      - Representado por:
      Objeto
      Propriedades ou Atributos
      Funcionalidades ou métodos

      Objeto pessoa: { propriedade: valor }
*/

console.log({
   name: "Thales",
   age: 22,
   andar: function(){
      console.log("andar");
   }
});

/* Array
   Uma lista ou agrupamento de dados. Cada item desse array possui uma posição ou índice.
   - Representado por:
   [] // Colchetes delimitam o array

   Pode existr um array/lista de objetos

   [
      {
         name: "Thales",
         age: 22,
      },
      {
         name: "Nayuri",
         age: 21,
      }
   ]

*/

console.log(
   [
      {
         name: "Thales",
         age: 22,
      },
      {
         name: "Nayuri",
         age: 21,
      }
   ]
)

/* Data types / Tipos de dados

   Tipo primitivo: String, number, float, boolean
   Tipo estrutural: Object, array, date, set
   Tipo estrutural primitivo: null (pois pode ser um objeto vazio)

*/