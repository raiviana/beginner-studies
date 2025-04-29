function validarBinario() {
  let input = document.getElementById("binario");
  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");

  // Remove caracteres inválidos, mas sem ativar erro se o usuário apenas apagar. Vai verificar se está válido, se a pessoa apagar o erro não ativará
  let valorCorrigido = input.value.replace(/[^01]/g, "");

  //Aqui ele irá comparar o valor do input com o valor da verificação.
  // Se tiver sido um delete o valor corrigido será igual o do input, se for valor inválido será identificado a diferença do valor corrigido e do input e gerará o erro
  if (input.value !== valorCorrigido) {
      erro.textContent = "Apenas 0 e 1 são permitidos!";
  } else {
      erro.textContent = "";
  }

  // Atualiza o valor do input sem os caracteres inválidos
  input.value = valorCorrigido;
  resultado.textContent = "";

}

function calcularDecimal() {
  let input = document.getElementById("binario");
  if (input.value === ""){
    erro.textContent = "Campo vazio, insira algum número!";
  } else {
    const numeros = input.value.split('').map(Number); /* Aqui transformamos o valor do input em número e em um array*/
    let multiplicados = numeros.map((num, index) => {
      return(num* 2 ** ((numeros.length - 1) - index))
    })
    const somaTotal = multiplicados.reduce((acc, num) => acc + num, 0);
  
    let resultado = document.getElementById("resultado");
    resultado.textContent = "O número Binário convertido para decimal é " + somaTotal;
  }

}