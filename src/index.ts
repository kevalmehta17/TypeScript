// let a: any = "keval";
// console.log(a);
// a = 16;
// console.log(a);

//Array in Ts

// let arr: string[] = ["KEVAL", "Mehta"];
// let lowerCaseArr = arr.map(ele => ele.toLowerCase());
// console.log(lowerCaseArr);

// arr.forEach(ele => ele.toString());
// arr.push(6);
// console.log(arr);

//Tuple in Ts
// const tuple: (number | string | boolean)[] = [33, 17, "Mehta", true];
// console.log(tuple[1]);

// Enum in Ts

// enum Distance {
//   km = 1000,
//   m,
//   cm,
// }

// const myDistance: Distance = Distance.cm;
// console.log(myDistance); //Output : 1002

// enum ShirtSize {
//   S = "small",
//   M = "medium",
//   L = "large",
//   xl = "extra large",
//   xxl = "extra extra large"
// }

// const mySize: ShirtSize = ShirtSize.xxl;
// console.log(mySize); //Output : extra extra large

//Object in Ts

//type in Ts

type details = {
  name: string;
  age: number;
  isStudent: boolean;
}

type Address = {
  street: string;
  city: string;
  country: string;
}

let myAddress: Address = {
  street: "123 Main St",
  city: "Anytown",
  country: "USA"
};

console.log(myAddress);

let person: details = {
  name: "Keval",
  age: 25,
  isStudent: true,
};
console.log(person["isStudent"]);
console.log(person);

//Function in Ts

// function myFunction(text: string): number {
//   if (text == "Hello") {
//     return 1;
//   }
//   else {
//     return 0;
//   }

// }
// let myText: number = myFunction("Hello");
// console.log(myText);
// function addNumbers(num1: number, num2: number): number {
//   return num1 + num2;
// }

// console.log(addNumbers(5, 10));

// function multipleNumber(num1: number, num2: number): number {
//   return num1 * num2;
// }
