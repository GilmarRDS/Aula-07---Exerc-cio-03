const prompt = require('prompt-sync')();

// 3. Crie um algoritmo em que, dada a tabela a seguir, calcula e exibe na tela o valor de desconto a ser concedido para um determinado cliente, de acordo com o valor da compra.O algoritmo deverá receber pelo teclado o nome do cliente e o valor total da compra:


// | Valor da Compra | % de Desconto |
// | Abaixo de R$ 1.000, 00 | 5 |
// | Entre R$ 1.000, 00 a R$ 5.000, 00 | 10 |
// | Acima de R$ 5.000, 00 | 15 |


var nome_cliente = prompt ('Digite o nome do cliente: ');
var valor_compra = parseFloat(prompt ('Digite o valor total da compra: '));

if(valor_compra > 5000){
    desconto = valor_compra * 0.15;
} else if ((valor_compra > 1000) && (valor_compra < 5000) ){
    desconto = valor_compra * 0.10;
}else{
    desconto = valor_compra * 0.05;
}

console.log('O valor de desconto a ser concedido para', nome_cliente, 'será de R$', desconto, 'reais');