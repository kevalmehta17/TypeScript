
// interface User {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
// }


// // Pick :- It lets you Pick the values from the type/Interface and create a new type/Interface
// type updateProps = Pick<User, 'name' | 'age' | 'email'>;

// // Partial:- It lets you make all the properties of the type/Interface optional
// type updatePropsOptional = Partial<updateProps>;

// function updateUser(updatedProps: updatePropsOptional) {
//     // hit the db

// }
// updateUser({
//     name: "Keval",

// })

// //ReadOnly

// type User1 = {
//     readonly name: string,
//     age: number
// }

// const user1: User1 = {
//     name: "Keval",
//     age: 20,

// }

// console.log(user1);

// Record and Map
//Record :- It is the way to define an object type whose keys are strings and values are of a specific type.

// type Users = Record<string, { name: string, age: number }>;

// const user: Users = {
//     "kev@123": {
//         age: 20,
//         name: "Keval"

//     },
//     "nav@123": {
//         name: "Navin",
//         age: 30
//     }
// }

//Map in ts :-

// const users = new Map();
// users.set("kev@123", { name: "Keval", age: 20 });
// users.set("nav@123", { name: "Navin", age: 30 });

//Exclude:-


type EventTypes = "click" | "scroll" | "mousemove";

type Excluding = Exclude<EventTypes, "scroll">; //Output : click | mousemove

const handleEvent = (event: Excluding) => {
    console.log(`Handling Event:- ${event}`);
}

handleEvent("click");
