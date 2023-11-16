//Arrow Function
const merhaba = () => {
    console.log("Merhaba");
}
merhaba();

const merhaba2 = (firstName) => {       //tek parametre girilecekse parantez girmeye gerek yok.
    console.log(`Merhaba ${firstName}`);    //tek işlem yapılacaksa süslü paranteze de gerek yok. Returnler için de geçerli.
}
merhaba2("Bahadir");

