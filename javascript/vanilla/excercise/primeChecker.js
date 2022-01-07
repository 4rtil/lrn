const numbeToCheck = 911;
let isPrime = true;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

while (true) {
    readline.question(`What's your number?`, numbeToCheck => {
        
        for (let i = 2; i < numbeToCheck; i++) {
            if (numbeToCheck % i == 0) {
                console.log(`liczba nie jest pierwsza, bo dzieli się przez ${i}, patrz: ${numbeToCheck} / ${i} = ${numbeToCheck / i}`);
                isPrime = false;
            }
        }

        if (isPrime) {
            console.log(`liczba ${numbeToCheck} jest pierwsza`)
        }

        readline.close()
    })

}