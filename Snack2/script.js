/* Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */



/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare 
le altre saranno tutte settate a 0.
*/

const championsLeague = [
    {
        nome : 'Ajax' ,
        punti : 0,
        falli : 0,
    },
    {
        nome : 'juventus' ,
        punti : 0,
        falli : 0,
    },
    {
        nome : 'Bajer' ,
        punti : 0,
        falli : 0,
    },
    {
        nome : 'Atalanta' ,
        punti : 0,
        falli : 0,
    },
    {
        nome : 'Porto' ,
        punti : 0,
        falli : 0,
    },
    {
        nome : 'Real Madrid' ,
        punti : 0,
        falli : 0,
    },
    {
        nome : 'Barcellona' ,
        punti : 0,
        falli : 0,
    },
    {
        nome : 'Atletico ' ,
        punti : 0,
        falli : 0,
    },
]

console.log(championsLeague)




//Generare numeri random al posto degli 0 nelle proprietà:
//Punti fatti e falli subiti.

//creo una function che mi calcoli dei numeri random che utilizzerò per sostituire
//i numeri 0
const nuovoGruppo =[]

punteggiSquadre(championsLeague)

function punteggiSquadre (squadre){
    for (let i = 0; i < squadre.length; i++) {

        //creo dei numeri ranmdom dare ai punteggi e ai falli
        const falliSquadre = Math.ceil(Math.random() * 90)
        const puntiSquadre = Math.ceil(Math.random() * 50)

        squadre[i].falli = falliSquadre
        squadre[i].punti = puntiSquadre
        

        const {nome, falli}= championsLeague[i]
        const nuovaArraySquadre = {nome, falli}

        //metto nel nuovo gruppo gli elementi che mi inteessano nome i falli
        nuovoGruppo.push(nuovaArraySquadre)
    }
    console.log(nuovoGruppo)
}