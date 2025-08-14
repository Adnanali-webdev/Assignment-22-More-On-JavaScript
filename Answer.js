//Q1)
//Ans 1)

const person = {
    name : "Alice",
    greet : function(){
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`);
        }, 1000);
    }
};
person.greet();

/* Step 1: Predict the output
   After ~1 second, it will print: Hello, my name is Alice

   Step 2: Why this happens
1) Object Literal
   We define person as an object with:
     -> A property name = "Alice".
     -> A method greet (regular function syntax).

2) Calling person.greet()
     ->  Inside greet, we call setTimeout(...).
     ->  The callback passed to setTimeout is an arrow function.

3) Arrow Functions & Lexical this

->   Arrow functions do not have their own this.
     Instead, they lexically inherit this from the scope in which they were created.
->   Here, the arrow function is created inside greet, and greet was called as person.greet().
     So in this context, this inside greet refers to the person object.

4) Why a regular function would behave differently
-> If we had written function() { ... } inside setTimeout, this inside that function would not refer to person by default — it would be undefined in strict mode or window in non-strict mode.
-> Arrow functions avoid that re-binding, so they preserve this correctly for object methods like this one.
 */


/* ****************************************************************************************************************************************************************************************************************************** */

//Q2)
//Ans)

const multiply = (a,b) =>  a * b;


const obj = {
    value : 10,
    add(num) { 
       return this.value + num
}};

console.log(multiply(5,3));
console.log(obj.add(5));

/************************************************************************************************************************************************** */

// Q3)

//Ans 3)

async function fetchData(){
    try{
    const promise = await new Promise((resolve,reject) => {
        setTimeout(() => {
            let success =  Math.random() > 0.5;
            success ? resolve("Data received") : reject("Error fetching data");
        },2000);
    })
    console.log(promise);
}
catch(error){
  console.error(error);
}
};

fetchData();

/**************************************************************************************************************************************************************************** */


// Q4)
// Ans )


const userData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("userData received ");
        }, 1000)
    })
};

const orderDetails = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("orderDetails received ");

        }, 2000);
    })
};

const paymentStatus = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("payment received");

        }, 3000);
    })
};

async function message() {
    try {
        const first = await userData();
        console.log(first)

        const second = await orderDetails();
        console.log(second)

        const third = await paymentStatus();
        console.log(third)
        console.log("Order Completed")
    }
    catch (error) {
        console.log(error)
    }
};
message();


/* ********************************************************************************************************************** */

// Q5)
// Ans)

function stringToNumber(input) {
   try {

      let num = Number(input);
      if (isNaN(num)) {
         throw new Error()
      }
      return num ** 2;

   }
catch (error) {
      return "Invalid Input";
   }
};

console.log(stringToNumber("7"));
console.log(stringToNumber(7));
console.log(stringToNumber("abc"));
