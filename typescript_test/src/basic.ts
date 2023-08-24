let firstName: string = "Lakshmikant";

let lastName = "D";

let age: number = 30;


let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

const names: string[] = [];

names.push("Rajesh")
names.push("Vikash")
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};




const car2: { type: string, model: string, year?: number } = {
    type: "Toyota",
    model: "Corolla"
};


type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car4: Car = {
    year: carYear,
    type: carType,
    model: carModel
};

interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
};