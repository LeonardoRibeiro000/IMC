function CalcularIMC () {
  const form = document.getElementById('some-form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    
})
  let altura = document.getElementById("altura").value
  let peso = document.getElementById("quilos").value
  let imc = peso / (altura * altura)
  console.log(parseFloat(imc.toFixed(2)));
  
  
    if(imc < 17) {
      document.getElementById("resultado").innerHTML = "Muito abaixo do peso!"
    }
  else if(imc >= 17 && imc <= 18.49 ) {
    document.getElementById("resultado").innerHTML = "Abaixo do peso!"
  }else if (imc >= 18.50 && imc <= 24.99 ){
    document.getElementById("resultado").innerHTML ="Peso normal!"
  }else if (imc>= 25 && imc <= 29.99 ){
    document.getElementById("resultado").innerHTML ="Acima do peso!"
  }else if (imc >= 30 && imc<= 34.99 ){
    document.getElementById("resultado").innerHTML ="Obesidade nível I!"
  }else if (imc >= 35 && imc <= 39.99 ){
    document.getElementById("resultado").innerHTML ="Obesidade nível 2!"
  }else if (imc > 40 ){
    document.getElementById("resultado").innerHTML ="Obesidade nível 3!"
  }else{
    document.getElementById("resultado").innerHTML ="IMC inválido!"
  }
    

  }
  
 





 


