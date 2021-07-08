// Definí una función esPositivoONegativo que reciba como argumento un numero y 
// devuelva el string positivo si el numero es positivo, o el string negativo si el 
// numero es negativo

//  esPositivoONegativo(3)
// 'positivo'
//  esPositivoONegativo(-5)
// 'negativo'

const esPositivoONegativo = (num) => {
    if (num > 0) {
      return ("positivo")
    }
    else{
      return ("negativo")
    }
  }
  
  let num = esPositivoONegativo;
  
  esPositivoONegativo(3);
  esPositivoONegativo(-5);