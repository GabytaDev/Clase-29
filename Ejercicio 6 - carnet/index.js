// Definí una función puedeRenovarCarnet que reciba como argumentos tres booleanos,
//  pasoTests, tieneMultasImpagas y pagoImpuestos, y nos indique si una persona está 
//  habilitada para renovar su carnet de conducir. Una persona puede renovar su carnet si pasó 
//  los tests, no tiene multas impagas y pagó todos los impuestos

//  puedeRenovarCarnet(true, true, true)
// false
//  puedeRenovarCarnet(true, true, false)
// false
//  puedeRenovarCarnet(true, false, true)
// true
//  puedeRenovarCarnet(true, false, false)
// false
//  puedeRenovarCarnet(false, true, true)
// false
//  puedeRenovarCarnet(false, true, false)
// false
//  puedeRenovarCarnet(false, false, true)
// false
//  puedeRenovarCarnet(false, false, false)
// false

const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) =>{
    if (pasoTests === true && tieneMultasImpagas === false && pagoImpuestos === true) {
       return true
    }
    else {
      return false
    }
     
 }
  
puedeRenovarCarnet(true, true, true);
puedeRenovarCarnet(true, true, false);
puedeRenovarCarnet(true, false, true)
puedeRenovarCarnet(true, false, false);
puedeRenovarCarnet(false, true, true);
puedeRenovarCarnet(false, true, false);
puedeRenovarCarnet(false, false, true);
puedeRenovarCarnet(false, false, false);