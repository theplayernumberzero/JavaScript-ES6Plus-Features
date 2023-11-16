//Spread Operatörü

const langs = ["java", "python", "c++"];

// console.log(langs[1],langs[2],langs[3]);

console.log(...langs);  //array değerlerini boşluklu şekilde yazdırır.

const langs2 = ["Kotlin","c#",...langs];    //arrayi arraye ekleme.

const numbers = [1,2,3,4,5,6,7];

const [a,b,...numbers2] = numbers;      //a ve b ilk iki değere atandı, geri kalanlar numbers2 arrayine atandı.
console.log(a,b);
console.log(numbers2);

const addNumbers = () => console.log(a+b+c);

const numbers3 = [100,200,300];

addNumbers(...numbers3);