function consulta() {
    var cep = input_cep.value;
    console.log(cep);

    fetch(`https://viacep.com.br/ws/${cep}/json/`,{
      method: "GET",
      mode: "cors"
    }).then(function(resposta){
      resposta.json().then(function(data){
        console.log(data);
        if (cep >= 12000000 || cep <= 19999999) {
            alert("Apoena mais próxima é em SP")
            retorno.innerHTML = 
            `
            Apoena mais próxima é em SP
            `;
        } /*else if (cep >= 20000000 || cep <= 28999999) {
            retorno.innerHTML = 
            `
            Apoena mais próxima é no RJ
            `;
        }*/
      })
      console.log(resposta);
    }).catch(function(erro){
      console.log(erro);
    })
  }