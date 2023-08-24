// Objeto

const person = {
   name: "Thales",
   age: 22,
   weight: 33.8,
   isAdmin: true
}

if(person.isAdmin === true){
   person.isAdmin = "Sim"
}
else if(person.isAdmin === false){
   person.isAdmin = "Não"
}
else {
   person.isAdmin = undefined
}

console.log(person)