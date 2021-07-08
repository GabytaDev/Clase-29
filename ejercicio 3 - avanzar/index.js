// Definí una función puedeAvanzar que tome por parámetro un string con 
// un color del semáforo y nos diga si puede avanzar

//  puedeAvanzar('verde')     
// true
//  puedeAvanzar('amarillo')
// false
//  puedeAvanzar('rojo')  
// false

const puedeAvanzar = (color) =>{
    if (color === "verde"){
        return true
    }
    else{
        return false
    }
   

}

puedeAvanzar('verde');
puedeAvanzar('amarillo');
puedeAvanzar('rojo');  