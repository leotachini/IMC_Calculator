function calcularIMC() {
    let weight = parseFloat(document.getElementById('peso').value);
    let height = parseFloat(document.getElementById('altura').value);
  
    let imc = weight / ((height / 100) * (height / 100));
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Seu calculo do IMC resultou em: ' + imc.toFixed(1);
    document.getElementById("slider").value = imc.toFixed(0);
    if (imc < 18.5) {
      document.body.style.backgroundColor = '#1d610a'; 
      document.getElementById("diagnostico").innerHTML = 'Você está abaixo do peso';
      document.body.style.color = '#fff'; 
    } else if (imc >= 18.5 && imc < 25) {
      document.body.style.backgroundColor = 'steelblue';
      document.body.style.color = '#fff'; 
      document.getElementById("diagnostico").innerHTML = 'Você está com um peso ideal';
    } else if (imc >= 25 && imc < 30) {
      document.body.style.backgroundColor = '#ffffb3'; 
      document.getElementById("diagnostico").innerHTML = 'Você está acima do peso ideal';
      document.body.style.color = '#000'; 
    } else {
      document.body.style.backgroundColor = '#e74c3c'; 
      document.getElementById("diagnostico").innerHTML = 'Você está com algum grau de obesidade';
      document.body.style.color = '#fff'; 
    }
    
  }
  