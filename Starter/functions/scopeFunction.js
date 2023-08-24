// Function scope
let subject = "Create video"
    
function createThink(subject) {
    subject = "study"
    return subject
}

// Está sendo passado como argumento o parâmetro da função
console.log(createThink(subject))

// Está sendo escrito a variável let subject
console.log(subject)

// Quando um parâmetro não é passada na função, somente a variável é alterada, pois não existe parâmetro