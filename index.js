// Import stylesheets
import './style.css';

// ****************************************************
// ----------------- CLASS & CONSTRUCTOR --------------
// ****************************************************

//Create new CLASS
class MyClass {
  //create constructor with parameters
  constructor(name, age) {
    //create properties 'name' and 'age' on the class and assign them values passed as arguments
    this.name = name;
    this.age = age;
  }

  //create class method
  sayHi() {
    return `Hello ${this.name}`;
  }
}

//crate an instace of 'MyClass'
const jon = new MyClass('John', 21);

console.log(jon.name); //John
console.log(jon.age); //21

//call 'sayHi' class method on 'jon' instance;
const say = jon.sayHi();
console.log(say); //Hello John

// Public Class Fields and Methods
// ********************************************

class Car {
  //Define class fields for 'numOfWheels' and 'fuel'.
  numOfWheels = 4;
  fuelType = 'electric';

  //Define public method
  startEngine() {
    return 'Engine is running';
  }
}

//create instance of 'Car' class
const tesla = new Car();

//log the value of public class field 'fuelType'
console.log(tesla.fuelType); //electric

//call the public class method
console.log(tesla.startEngine()); //Engine is running.
