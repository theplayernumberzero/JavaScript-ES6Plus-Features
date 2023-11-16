// Mapler => Key-value ilişkisi
//Key tüm veri tiplerinden olabilir

let myMap = new Map();

const key1 = "Bahadir";
const key2 = {a:10,b:20};
const key3 = () => 2;

//Set
myMap.set(key1,"String Değer");
myMap.set(key2,"Object Literal Değer");
myMap.set(key3,"Function Değer");

//Get
console.log(myMap.get(key1));

//Map boyutu
console.log(myMap.size);

const cities = new Map();

cities.set("Ankara",6);
cities.set("Sivas",58);
cities.set("İstanbul",34);

//For each
cities.forEach(function(value, key){
    console.log(`${key} plaka: ${value}`);
});

//For of
for(let value of cities){
    console.log(value);         //Map elemanları array elemanları şeklinde verilir
}
//Destructing ile
for(let [key, value] of cities){
    console.log(key, value);
}

//Map Keys
for(let key of cities.keys()){        //sadece keyleri alır
    console.log(key);
}

//Map Values
for(let value of cities.values()){        
    console.log(value);
}

//Arraylerden Map oluşturma
const array = [["key1", "value1"],["key2", "value2"]];

const lastArray = new Map(array);
console.log(lastArray);

//Maplerden Array oluşturma

const array2 = Array.from(cities);      //iki boyutlu array
console.log(array2);