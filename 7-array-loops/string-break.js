//Iterando sobre strings e break
// um string se comporta como se fosse um array
const palavra = 'alemanha';

let encontrado = false;

for (let letra of palavra) {
    if (letra === 'h') {
        console.log('tem letgra h');
        encontrado = true;
        break;
    }

}
//se não encontrado <!encontrado>
if (!encontrado) {
    console.log('não tem letgra h');
}
