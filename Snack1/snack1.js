/**
 * Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
*/

  const biciArray = [
    {
        nome : 'MountainBike',
        peso : 18,
    },
    {
        nome : 'Fafrees',
        peso : 37,
    },
    {
        nome : 'Ahooga',
        peso : 10,	
        
    },
    {
        nome : 'Bianchi',
        peso : 30,
    },
    {
        nome : 'Elops',
        peso : 39,
    },
    {
        nome : 'Triban',
        peso : 42,	
        
    }
    
];
console.log(biciArray)

//Stampare a schermo la bici con peso minore 
function getLowerPeso (bici){
    let sortedArray = bici[0]

//creo un ciclo for per ciclare le mie bici e ritorno il valore che mi interessa
 for (let i = 0; i < bici.length; i++) {
    if (bici[i].peso < sortedArray.peso){
        sortedArray = bici[i]
    }
     
 }
 return {nome,peso } = sortedArray


}
console.log(getLowerPeso (biciArray))

console.log(`la bici ${nome} è la più leggera ${peso}`)
