//ex 1 -> arrow function com um parâmetro
const dobro = x => x * 2;
console.log(dobro(7));
console.log(dobro(15));

//ex 2 -> arrow function com múltiplos parâmetros
const dividir = (a, b) => a / b;
console.log(dividir(10, 2));
console.log(dividir(9, 3));

//ex 3 -> arrow function com múltiplas linhas
const mensagemBoasVindas = (nome) => {
    return `Seja bem-vindo, ${nome}!`;
};
console.log(mensagemBoasVindas("Carlos"));
console.log(mensagemBoasVindas("Ana"));    