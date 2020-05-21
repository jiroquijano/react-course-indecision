class Person {
    constructor(name='nameless', age=0){
        this.name = name;
        this.age = age;
    };
    getGreeting(){
        return `Hi, my name is ${this.name}${this.age>0 ? `, I'm ${this.age} years old`:''}!`;
    };
};

class Student extends Person{
    constructor(name, age, major='undecided'){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getGreeting(){
       let greeting = super.getGreeting();
       greeting = this.hasMajor() ? `${greeting} I study ${this.major}` : greeting;
       return greeting;
    }
};

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        greeting = this.hasHomeLocation() ? `${greeting} I came from ${this.homeLocation}`:greeting;
        return greeting;
    }
};

const someStudent = new Student('Jiro',undefined,'engineering');
console.log(someStudent.getGreeting());

const someTraveler = new Traveler('Jiro',29,'Bicol');
console.log(someTraveler.getGreeting());