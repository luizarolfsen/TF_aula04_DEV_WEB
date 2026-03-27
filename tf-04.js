console.log("\n== 1)  Uso básico de funções  ==\n");

// função tradicional
function subtrai1(a, b) {
    // recebe dois valores e retorna outro valor
    return a - b;
}

// arrow function
const subtrai2 = (a, b) => {
	return a - b;
}

// arrow function reduzida (retorno immplícito)
const subtrai3 = (a, b) => a-b;

const resultado1 = subtrai1(10, 5);
const resultado2 = subtrai2(20, 10);
const resultado3 = subtrai3(8, 4);


console.log("Resultados da subtrações:", resultado1, ", ",resultado2, ", ", resultado3); // 5, 10, 4



console.log("\n== 2)entrada, saída e retorno ==\n");

// definindo os parâmetros
function soma(x, y) {
	return x + y;
}

// executando os argumentos
const result_soma = soma(8,10);

console.log("Resultado da soma: ", result_soma);



console.log("\n== 3) função como valor ==\n");

function criar_funcao() {
	return function() {
		console.log("Função criada e retornada por outra função!");
	}
}

const funcao_gerada = criar_funcao();

funcao_gerada(); // executa a função retornada



console.log("\n== 4) uso de função em outros contextos, como objetos e parâmetros ==\n");

const cavalo = {
 nome: "Frodo",
 // a propriedade trotar recebe uma função
 trotar: function () {
 console.log("O cavalo está trotando.");
 }
};
// executando a função armazenada no objeto
cavalo.trotar();



console.log("\n== 5) callback e execução posterior com setTimeout ==\n");

setTimeout(() => {
	console.log("Executou após 5s");// o código será executado após 5 segundos
}, 5000);




