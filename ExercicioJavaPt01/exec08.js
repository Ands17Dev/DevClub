const number = 7

if(number % 2 === 0){
    if(number % 5 === 0) console.log("numero é par e divisil por 5")
    else console.log("o numero é par e não é divisil por 5")
} else{
    for(let i = 2; i < number;i++)
        if(number % i === 0){
            console.log("ele é impar, mas não é primo")
            break
        }else{
            if(i === number -1) console.log("o numero é primo")
        }
        
}