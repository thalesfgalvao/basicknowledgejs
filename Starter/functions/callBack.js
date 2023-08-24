// Callback functon
// Callback nada mais é que uma função dentro de outra. Será chamada outra vez

const sayMyName = (name) => {
    console.log("Antes do callback");
    name();
    console.log("Depois do callback")
}

sayMyName(
    () => {
        console.log("Thales")
    }
)