const prompt = require("prompt");
prompt.start();

prompt.get(["valor"],(err, res)=>{
    const valor = res.valor;

    for(let step = 1; step <= 10; step++){
        step === 1 ? console.log(`Muevete ${step} paso`): console.log(`Muevete ${step} pasos`)
        
    }
})