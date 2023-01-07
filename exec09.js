const numberone = 3
const numbertwo = 5
const numbertree = 7
const numberfor = 2

if (numberone % 2 === 0 && numbertwo % 2 === 0 && numbertree % 2 === 0 && numberfor % 2 === 0) {
    console.log("Todos os numeros são pares")
} else if (numberone % 2 !== 0 && numbertwo % 2 !== 0 && numbertree % 2 !== 0 && numberfor % 2 !== 0) {
    console.log("Todos os numeros são ímpares")

} else {
    console.log("Estão todos misturados, Impares e pares")
}