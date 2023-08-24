// Scope

/* Scope determina a visibilidade de alguma variável

   Block statement é uma declaração de bloco, delimitado por {} (chaves)

   {
      // Aqui vai o código do bloco
   }

   O bloco cria um escopo (block-scoped)

   Variável do tipo var é global e local, ou seja, pode ser reconhecida fora de um bloco.
   Segue o modelo hoisting (elevação), que joga a variável para o início da aplicação como undefined
   Exemplo:

   console.log("O valor de X é: ", x)

   {
      var x = 0
   }

   console.log("O novo valor de X é: ", x)

   A variável let funciona de maneira diferente, pois ela não é global, é apenas local.
   Você pode declarar let no inicio da aplicação e usar e alterar o valor dentro de um bloco
   Não pode declarar num bloco e querer usar fora dele, assim como const

   let y = 0

   {
      let y = 1
      console.log("O valor de Y dentro do bloco é: ", y)
   }
   console.log("O valor de Y fora do bloco é: ", y)
*/