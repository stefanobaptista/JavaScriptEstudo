var vet = [8,9,4,4,9,8,4]

for(i=0;i<vet.length;i++){
    console.log(`O a posição ${i} tem o valor ${vet[i]}`)
}
console.log("---------------------------------------")
for(var i in vet){
    vet.sort() 
    console.log(`O a posição ${i} tem o valor ${vet[i]}`)
}
console.log(vet.indexOf(9))