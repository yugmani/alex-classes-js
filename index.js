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

//Static class fields and methods
// **********************************************

class Vehicle {
  //Define static property to keep track of how many instances of Vehicle has been created.
  static numOfCopies = 0;

  constructor() {
    //When new instance of Vehicle is created update the number of Vehicle instances
    Vehicle.numOfCopies++;
  }

  //Create static method to access static field 'numOfCopies'
  static getNumOfCopies() {
    //Return the value of 'numOfCopies' field
    return Vehicle.numOfCopies;
  }
}

//Log number of instance of Vehicle
console.log(Vehicle.getNumOfCopies()); //0

//Create instance of Vehicle
const porshe = new Vehicle();

//log number of instances of Vehicle again
console.log(Vehicle.getNumOfCopies()); //1

// Private Class Fields and Methods
// ********************************************************

class App {
  //Declare private field 'version'
  #version = '1.0';

  //Create private method 'getVerstion'
  #getVersion() {
    return this.#version;
  }

  // Create public method 'getVersionPublic to access private field 'version'
  getVersionPublic() {
    return this.#version;
  }

  // Create another public method that calls the private method 'getVersion'
  callGetVersion() {
    return this.#getVersion();
  }
}

//Create instance of App
const myApp = new App();

// Log number of version
console.log(myApp.getVersionPublic());
// 1.0

console.log(myApp.callGetVersion());
// 1.0
