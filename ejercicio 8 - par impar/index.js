// Definí una función esParOImpar que tome un numero y retorne el string par 
// si el numero es par, o el string impar si el numero es impar

// esParOImpar(3)
// 'impar'
// esParOImpar(10)
// 'par'

const esParOImpar = (numero) =>{
    if(numero % 2 === 0) {
     return ("par")
   }
   else {
     return("impar")
   }
   
}
 
esParOImpar(3);
 
esParOImpar(10);