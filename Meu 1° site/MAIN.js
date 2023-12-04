const titulo = document.getElementById("Teste");
let exemplo = "Paulo";
exemplo = 10;
exemplo = true;
let vetor = [1, 'Web', 'info', true];
let num_1, num_2, soma, sub, mult, div, num_3;
num_1 = 16;
num_2 = 16.1;
num_3 = 10;
soma = num_1 + num_2;
sub = num_1 - num_2;
mult = num_1 * num_2;
div = num_1 / num_2;

function multiplicacao(a, b){
    return a * b;
}
titulo.textContent = multiplicacao(num_1, num_2);
//
















// Três iguais (===) para verificar igualdade
//titulo.textContent = "Titulo da pagina";
//Exclamação mais dois iguais (!==) para verificar diferença
titulo.textContent = num_1 === num_2;
//Estrutura Condicional
/*let sorvete = "chocolate";
if(sorvete === "chocolate");{
    alert("Sim, eu gosto de sorvete de chocolate");
}else{
    alert("Eu gosto de sorvete de baunilha");
}*/