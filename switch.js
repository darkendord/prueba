const prompt = require("prompt");

prompt.start();

console.log("Ingrese un valor:");
prompt.get(["profesion"],(error, result)=>{
    const profesion = result.profesion;

    switch (profesion) {
        case "Maestro":
            console.log("La profesion seleccionada es 'Maestro'")
            break;
        case "Ingeniero":
            console.log("La profesion seleccionada es 'Ingeniero'")
            break;
        case "Doctor":
            console.log("La profesion seleccionada es 'Doctor'")
            break;
        default:
            console.log("La profesion no es valida!")
            break;
    }
})