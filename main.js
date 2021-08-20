// class User{
//     name = "Ivan",
//     age = 22,
// }

// let use = new User();
// console.log(use);

// class User {
//     constructor(userName, userAge){
//         this.userName = userName;
//         this.userAge = userAge;

//     }
// }

// let us1 = new User('Ivan', 22);
// console.log(us1);
// let us2 = new User('Petro', 33);
// console.log(us2);
// let us3 = new User('Vasyl', 44);
// console.log(us3);


// class User {
//     constructor(userName, userAge){
//         this.userName = userName;
//         this.userAge = userAge;

//     }
//     showInfo(){
//         console.log(`Name ${this.userName} ${this.userAge}`)
//     }
// }

// let us3 = new User('Vasyl', 44);
// console.log(us3);
// us3.showInfo();

// console.log(Object.getOwnPropertyNames(User.prototype))

// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height =height;
//     }

//     calcArea(){
//         return this.width * this.height
//     }

//     get area(){
//         return this.calcArea()
//     }
// }

// let square  = new Rectangle(10,10);
// console.log(square.calcArea());
// console.log(square.area)

// class User {
//     constructor(UserName){
//         this._name = UserName.toLowerCase();
//     }

//     get Name(){
//         return this._name;
//     }

//     set name(newName){
//         this._name = newName;
//     }
// }

// let us = new User('Ivan');
// console.log(us)

// class Circle{
//     static Pi = 3.14;
//     static getArea(r){
//         return Circle.Pi * r * r;
//     }
// }

// let qq = new Circle();
// console.log(Circle.Pi);
// console.log(Circle.getArea(10));

// function Person(name, sname){
//     this.name = new;
//     this.sname =sname;
// }

// Person.prototype.walk = function(){
//     console.log(`${this.name} is walking`)
// }

// function Programmer(name, sname, programmingLanguage){
//     Person.call(this, name, sname);
//     this.language = programmingLanguage;
// }

// Programmer.prototype = Object.create(Person.prototype);
// Programmer.prototype.constructor = Programmer;

// Programmer.prototype.writeCode = function(){
//     console.log(`${this.name} is coding in ${this.language}`);
// }

class Person{
    constructor(name, sname){
        this.name = name; 
        this.sname = sname
    }

    walk(){
        console.log(`${this.name} is walking`)
    }
}

class Programmer extends Person{
    constructor(name, sname, programmingLanguage){
        super(name, sname);
        this.language = programmingLanguage;
    };
    writeCode(){
        console.log(`${this.name} is coding in ${this.language}`);
    }
    
}

let pp = new Programmer('James', 'Bond', "Pyton");
console.log(pp);
pp.walk();
pp.writeCode();