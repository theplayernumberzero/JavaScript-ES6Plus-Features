let number1, number2;

let arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];

//Destructing

[number1, number2] = arr;       //1. ve 2. indexe eşitlenir.
let [number3, number4] = arr;   //daha kısa hali.

//Obje Destructing

const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const {a:number5 ,c:number6 ,e:number7} = numbers;        //destructing için key valuelarını vermemiz lazım. İki nokta kullanarak ne şekilde kullanmak istediğini belirtebilirsin.

//Function Destructing

const getLangs = () => ["python", "java", "c++"];

const [lang1, lang2, lang3] = getLangs();