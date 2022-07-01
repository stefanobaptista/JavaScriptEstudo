var idade = 66

console.log(`Voce tem ${idade} anos.`)

if(idade < 16){
    console.log(`Você não vota.`)
} else{
    if((idade >=16 && idade <18)|| idade> 65){
        console.log(`Você pode votar.`)
    }else{
        console.log(`Você é obrigado a votar.`)
    }
}
