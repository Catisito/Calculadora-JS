function calculate() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operador = document.getElementById("operador").value;
    let resultado;
  
    switch (operador) {
      case "add":
        resultado = add(numero1, numero2);
        break;
      case "subtract":
        resultado = subtract(numero1, numero2);
        break;
      case "multiply":
        resultado = multiply(numero1, numero2);
        break;
      case "divide":
        resultado = divide(numero1, numero2);
        break;
      default:
        resultado = "Operador inválido";
    }
  
    document.getElementById("result").innerHTML = "" + resultado;
  }
  
  function add(numero1, numero2) {
    return numero1 + numero2;
  }
  
  function subtract(numero1, numero2) {
    return numero1 - numero2;
  }
  
  function multiply(numero1, numero2) {
    return numero1 * numero2;
  }
  
  function divide(numero1, numero2) {
    if (numero2 !== 0) {
      return numero1 / numero2;
    } else {
      return "No se puede dividir por cero";
    }
  }