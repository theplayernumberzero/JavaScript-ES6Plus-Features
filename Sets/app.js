//Setler (bir değer yalnızca bir kez taşır)

const mySet = new Set();

mySet.add(100);
mySet.add(100);     //Aynı değeri eklemez
mySet.add("Bahadir");
mySet.add(true);

const mySet2 = new Set([101,"Umut",false]);

//Size
console.log(mySet.size);

//Delete 
mySet.delete(true);     //Girilen değer yoksa hata vermez

//Has metodu
console.log(mySet.has(100));    //has metodunda referans veri tipini sorgulatamazsın. Referans veri tipler aynı değere sahip olsa bile birbirine eşit değildir

//Setlerden Array Oluşturma
const array = Array.from(mySet);