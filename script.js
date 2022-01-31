function IMCCalc() {

  let inputWeight = document.querySelector("#weight");
  let inputHeight = document.querySelector("#height");
  let calculate = document.querySelector("#calculate");
  let result = document.querySelector("#result");


  let weight = inputWeight.value;
  let height = inputHeight.value;

  
    let heightMetters = height / 100;
    const IMC = (weight / (heightMetters * heightMetters)).toFixed(1);

    console.log(`weight: ${weight}` )
    console.log(`heightMetters: ${heightMetters}`)
    console.log(`IMC: ${IMC}`)
    
    let classification = '';

    if (IMC < 18.5) {
      classification = 'abaixo do peso ideal.';
    } else if (IMC >= 18.5 && IMC < 24.9) {
      classification = 'no peso ideal.';
    } else if (IMC >= 25.0 && IMC < 29.9) {
      classification = 'com sobrepeso.';
    } else if (IMC >= 30 && IMC <= 39.9) {
      classification = 'com obesidade.';
    } else if (IMC >= 40) {
      classification = 'com obesidade grave.'
    } else {
      classification = 'leve como uma pena.'
    }

    result.innerHTML = `<p>Seu IMC é ${IMC}, você está ${classification}</p>`
}
calculate.addEventListener('click', IMCCalc);