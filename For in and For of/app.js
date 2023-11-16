const person = {
    name:"Bahadir",
    age:"22",
    salary:0
};

const langs = ["python","java","C++"];

const name = "Bahadir";

//For in
//object
for(let prop in person){
    console.log(prop, person[prop]);      //key ve value
}

//array
for(let index in langs){
    console.log(index,langs[index]);
}

//string
for(let index2 in name){
    console.log(index2, name[index2]);
}

//For of (sadece array e benzer verilerde kullanılabilir)
//array
for(let value of langs){
    console.log(value);
}

//string
for(let character of name){
    console.log(character);
}