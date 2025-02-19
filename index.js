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

//ex 4 -> higher-order function personalizada
function executarOperacao(a, b, operacao) {
    return operacao(a, b);
}
console.log(executarOperacao(6, 3, (a, b) => a - b));
console.log(executarOperacao(4, 5, (a, b) => a * b));
console.log(executarOperacao(10, 2, (a, b) => a + b));
console.log(executarOperacao(8, 4, (a, b) => a / b));

//ex 5 -> map() - transformação de array
const precos = [100, 200, 300, 400];
const precosComDesconto = precos.map(preco => preco * 0.9);
console.log(precosComDesconto);

//ex 6 -> filter() - filtrando valores em um array
const idades = [12, 16, 18, 26, 14, 29, 15];
const menoresDeIdade = idades.filter(idade => idade < 18);
console.log(menoresDeIdade);

//ex 7 -> reduce() - somando valores de um array
const numeros = [2, 3, 4, 5];
const produto = numeros.reduce((total, num) => total * num, 1);
console.log(produto);


