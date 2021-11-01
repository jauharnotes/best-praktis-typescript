let num: number = 5;
let name: string = 'Belajar Typescript';
let isPresent: boolean = true;

//oop
class Car {
  model: String;
  doors: Number;
  isElectric: Boolean;
  constructor(model: String, doors: Number, isElectric: Boolean) {
    this.model = model;
    this.doors = doors;
    this.isElectric = isElectric;
  }
  displayMake(): void {
    console.log(`This car is ${this.model}`);
  }
}

//Interface
interface ICar {
        model: String,
        make: String,
        display(): void
       }
     const Car: ICar = {
        model: 'Prius',
        make: 'Toyota',
        display() => { console.log('hi'); }
      }
