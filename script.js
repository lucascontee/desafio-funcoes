let rank = calculateRank(546, 436)

function calculateRank(win, lose){
    let result = win - lose
    return result
}

if(rank < 11){
    var elo = 'Bronze'
}else if(rank < 21){
    var elo = 'Prata'
}else if(rank < 51){
    var elo = 'Ouro'
}else if(rank < 81){
    var elo = 'Diamante'
}else if(rank < 91){
    var elo = 'Lendário'
}else{
    var elo = 'Imortal'
}

console.log(`O Herói tem de saldo de ${rank} está no nível de ${elo}`)

    


    





