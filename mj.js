let person = {
    name: "Afruz", 
    surname: "Oxunov",
    age: 14,
    
}

person.city = "Tashkent"
person.age = 52
person.name = "LeBron"
person.surname = "James"
// console.log(person);



// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     carNumber: "LO777X", 
//     start: function () {
//         console.log("Машина заводится");
        
//     }
// }
// car.start()
// console.log(person, car);
let car = {
    name: 'Camry',
    price: "20.000$",
    credit: 'от 5.000$',
    img: "https://r2.erweima.ai/imgcompressed/img/compressed_7b95213f35dd07e3e46d720988bcc27d.webp"
}

let car2 = {
    name: 'Hilux',
    price: "28.000$",
    credit: 'от 9.000$',
    img: "https://r2.erweima.ai/imgcompressed/img/compressed_7b95213f35dd07e3e46d720988bcc27d.webp"
}
let car3 = {
    name: 'Corolla',
    price: "15.000$",
    credit: 'от 3.000$',
    img: "https://r2.erweima.ai/imgcompressed/img/compressed_7b95213f35dd07e3e46d720988bcc27d.webp"
}

let car4 = {
    name: 'RAV4',
    price: "20.000$",
    credit: 'от 5.000$',
    img: "https://r2.erweima.ai/imgcompressed/img/compressed_7b95213f35dd07e3e46d720988bcc27d.webp"
}

car2.name = "Malibu"
car2.gasoline = "Full"
delete car2.gasoline
// console.log(car, car2, car3, car4);
let iphone = {
    model: "pro",
    storage: "228gb",
    camera: "52 Mega PX",

}

// let copy = { ...original }
// console.log(original);
let company = {
    name: "Github",
    rating: 9.1,
    addres: {
        sreet: "Улица Шахрисабз",
        city:"Tashkent"
    }
}

let massiv = [1,2,3,4,5]
let Lakers = {
    couch: "LeBron",
    attack: "Bronny",
    defense: "Austin Reeves",
    bench: {
        attack: "Bebra Rose",
        defense: "Kapibara Nurmugomedov"
    }
}
let boston = {...Lakers}
boston.couch = 'mihail Jordan'

let school = {
    numberOfSchool: 171, 
    class: "8 A",
    people: 45,
    teacher: "Michel Jackson",
    adress: {
        number: 228,
        street: "Buyuk Ipak Yoli",
        city: "Taskent"
    }
}

let school2 = {...school}
school2.teacher = "Capitan Afriki"
school2.numberOfSchool = 52
console.log(school);
console.log(school2);
