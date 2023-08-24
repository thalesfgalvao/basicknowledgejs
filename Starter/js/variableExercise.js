// 1. Declarar uma variável de nome weight
   let weight;

// 2. Qual o tipo da variável acima?
   console.log(typeof weight)

/* 3. Declarar uma variável e atribuir valores para cada um dos dados:
      - name: string
      - age: number (integer)
      - starts: number (float)
      - isSubscribed: boolean
*/

   let name = "Thales";
   let age = 22;
   let starts = 4.8;
   let isSubscribed = true;

/* 4. A variável student abaixo é de que tipo de dados?

   4.1. Atribuir as mesmas propriedades e valores

   4.2. Mostre no console a seguinte mensage:
      <name> de idade <age> pesa <weight>kg.
*/

   let student = {
      name: "Thales",
      age: 22,
      weight: 65.5,
      isSubscribed: true
   }

   console.log(`${student.name} de ${student.age} anos pesa ${student.weight}kg`)

// 5. Declarar uma variável do tipo Array de nome studens e atriburi nenhum valor

   let students = []

// 6. Reatribuir valor para a variavel acima, colocando o objeto da questão 4.
   students = [
      student
   ]

   console.log(students)

// 7. Colocar no console o valor da posição zero do Array acima.
   console.log(students[0])

// 8. Crie um novo student e coloque na posição 1 do Array students
   let newStudent = {
      name: "Nayuri",
      age: 21,
      weight: 60,
      isSubscribed: true
   }

students[1] = newStudent;

console.log(students[1])