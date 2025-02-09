// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}






// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// const fromEuroToDollar = (euro) => {
//     let dollar = euro*1.07;
//     return dollar;
// }; 

const fromDollarToYen = (dollar) => {
    let yen = (dollar/oneEuroIs.USD)*oneEuroIs.JPY;
    return yen;
};

const fromYenToPound = (yen) => {
    let pound = (yen/oneEuroIs.JPY)*oneEuroIs.GBP; 
    return pound;
};

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound };