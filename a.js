/*function multiple(num1,num2){
    let op=num1*num2;
    return op;
}
console.log(multiple(5,9));*/
/*function calculateSalary(role) {
    let salary = 0;
    switch (role) {
      case "ceo":
        salary = 2200;
        break;
      case "manager":
        salary = 1800;
        break;
      case "cto":
        salary = 1800;
        break;
      case "developer":
        salary = 1500;
        break;
      default:
        salary = 1000;
        break;
    }
    return salary + "€";
  }

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);*/
/*function salary(position){
    let income=0;
    switch(position){
        case "front-end":
            income=5000;
            break;
        case "back-end":
            income=4500;
            break;
        case "data":
            income=3000;
            break;
        case "full-stack":
            income=9000;
            break;
        default:
            income=1000;
            break;
    }
    return income+" €";
}
const frontEnd=salary("front-end");
const backEnd=salary("back-end");
const data=salary("data");
const fullStack=salary("full-stack");
const elsePos=salary("else");

console.log(frontEnd);
console.log(backEnd);
console.log(data);
console.log(fullStack);
console.log(elsePos);*/
/*function salary(role){
    let income=0;
    if(role==="frontEnd")console.log("5000€");
    else if(role==="backEnd")console.log("4000€");
    else if(role==="fullStack")console.log("9000€");
    else if(role==="data")console.log("2500€");
    else console.log("1000€");
    
}
const front=salary("frontEnd");
const back=salary("backEnd");
const full=salary("fullStack");
const data=salary("data");
const other=salary("other");*/

/*console.log("frontEnd");
console.log(back);
console.log(full);
console.log(data);
console.log(other);*/
/*function salary(role){
    let income=0;
    if(role==="frontEnd")return "5000€";
    else if(role==="backEnd")return "4000€";
    else if(role==="fullStack")return "9000€";
    else if(role==="data")return "2500€";
    else return "1000€";
    
}
const front=salary("frontEnd");
const back=salary("backEnd");
const full=salary("fullStack");
const data=salary("data");
const other=salary("other");

console.log(front);
console.log(back);
console.log(full);
console.log(data);
console.log(other);*/
/*function triangle(num){
    let i;
    let j;
    for(i=1;i<=num;i++){
        let row="";
        for(j=1;j<=i;j++){
            row+=j+' ';
        }
        console.log(row);
    }
        
}
triangle(20);*/
/*const sum=(a,b)=>a+b;
const subtract=(a,b)=>a-b;
const multiply=(a,b)=>a*b;
const divide=(a,b)=>a/b;
const log=(value)=>console.log(value);
const result=divide(subtract(multiply(sum(2,4),sum(5,2)),2),5);
console.log(result);*/
/*const sum=(a,b)=>a+b;
const multi=(a,b)=>a*b;
const result=multi(sum(2,4),5);
console.log(result);*/
/*function op(a,b,c){
    let sum=a+b;
    let multi=sum*c;
    console.log(multi);
}
op(2,4,5);*/
/*const info=[
    {name:"Arshya",age:22,id:33},
    {name:"kasım",age:37,id:343},
    {name:"Ahmet",age:11,id:335},
    {name:"sarina",age:53,id:337},
    {name:"deniz",age:45,id:37777}
];

console.log(JSON.stringify(info));*/
/*let name ="deniz";
let surname="riyazi";
let age=22;
console.log(`Once i loved a girl her name was ${name} ${surname} with age of${age}`);*/
/*const obj={
    name:"deniz",
    surname:"riyazi",
    age:23,
    job:"hooter"
}
console.log(obj);
console.log(obj.name);
console.log(obj.age,obj.job);
console.log(JSON.parse(JSON.stringify(obj)));
console.log(JSON.stringify(obj));*/
/*function car(brand,year,color,model){
    this.brand=brand;
    this.year=year;
    this.car=color;
    this.model=model;
}
const car1=new car("porsche",1999,"red","super-sport");
console.log(car1);
console.log(Object.keys(car1));
console.log(JSON.stringify(car1));
console.log(JSON.parse(JSON.stringify(car1)));*/
/*const string='{"name":"Arshya","surname":"Razavi","age":23}';
console.log(JSON.parse(string));*/
/*function car(){
    let name="Mercedes";
    function inner(){
        return "I bought"+name;
    }
    return inner();
}
console.log(car());*/
/*const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((num) => {
  return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const numbers1 = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers1.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6]*/
/*const fruits = ['apple', 'banana', 'orange', 'mango'];

fruits.forEach((fruit, index) => {
  console.log(`Fruit ${index + 1}: ${fruit}`);
});*/
/*class car{
    constructor(brand,model,year,color){
        car.brand=brand;
        car.model=model;
        car.year=year;
        car.color=color;
    }
}
const car1=new car("Audi","sedan",2023,"red");
console.log(car.model,car.brand);*/
/*let num1=20;
let num2=40;
console.log(num1,num2);
[num1,num2]=[40,20];
console.log(num1,num2);*/
/*const car={
    brand:"Ferrari",
    color:"red",
    year:2019,
    model:"sedan"
}
const{brand,color,year,model}=car;
console.log(brand,color,year,model);*/
/*let numSeries=[0,1,2,3,4,5];
let num=7;
numSeries=[...numSeries,num];
console.log(numSeries);*/
/*const person={
    first:"arshya",
    last:"razavi",
    num:13,
    fav:"chocolate",
};
const{last,...theOthers}=person;
console.log(last,theOthers);*/
/*const countries={
    a:"usa",
    b:"uganda",
    c:"england",
    d:"germany",
};
const {a,...next}=countries;
console.log(next);*/
/*function sum(...nums){
    let result=0;
    for(let i=0;i<nums.length;i++){
        result+=nums[i];
    }
    console.log(result);
    return result;
}
sum(1,2,3,4,5);*/
/*function multiple(num1,num2,num3){
    return num1*num2*num3;
}
const numbers=[2,3,5];
console.log(multiple(...numbers));*/
/*const person={
    id:1,
    first:"Mario",
    last:"Rossi",
    age:25,
};
const json=JSON.stringify(person,["id","age"]);
console.log(json);*/
/*class person{
    constructor(firstName,LastName){
        this.firstName=firstName;
        this.LastName=LastName;
    }
}
const developer=new person("mario","rossi");
console.log(`${developer.firstName}-${developer.LastName}`);*/
/*const hello=()=>console.log("Hello");
function h1(callback, name){
    setTimeout(()=>callback(),1000);
    setTimeout(()=>console.log(name),2000);
}
h1(hello,"arshya");*/
/*const printHello = () => console.log("Hello");

const repeatHello = (callback) => setInterval(() => callback(), 1000);

repeatHello(printHello);*/
/*const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { name: "John", age: 30 };
        if (data) {
          resolve(data);
        } else {
          reject("Data not found");
        }
      }, 2000);
    });
  };
  
  fetchData()
    .then((data) => {
      console.log("Data:", data);
      return data.age;
    })
    .then((age) => {
      console.log("Age:", age);
    })
    .catch((error) => {
      console.error("Error:", error);
    })
    .finally(() => {
      console.log("Request complete");
    });*/
    /*
    1-Define a Book class with properties for title, author, and year.
2-Parse the JSON data into a JavaScript array of book objects using destructuring.
3-Use a static method on the Book class with json parameter to parse the JSON data and 
({    "title": "The Hobbit",    "author": "J.R.R. Tolkien",    "year": 1937  }
JSON.stringfy( {    "title": "The Hobbit",    "author": "J.R.R. Tolkien",    "year": 1937  });) we gonna pass something like this as a parameter to this static function)
4-Use a getter method on the Book class to retrieve the author name.
5-Use the sort() method with a custom comparison function to sort the array of Book objects by author name.
6-Convert the sorted list of books into JSON format.
7-Output the sorted list of books in JSON format.
8- create promise which will take a book object and will check the year is bigger then 1950
*/
const data=[  {    "title": "The Great Gatsby",    "author": "F. Scott Fitzgerald",    "year": 1925  },  {    "title": "To Kill a Mockingbird",    "author": "Harper Lee",    "year": 1960  },  {    "title": "The Catcher in the Rye",    "author": "J.D. Salinger",    "year": 1951  },  {    "title": "The Hobbit",    "author": "J.R.R. Tolkien",    "year": 1937  }]
class Book{
  constructor(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
  }
  static parseJson(obj){
   const obj1= JSON.parse(obj);
   return new Book(obj1.tile,obj1.author,obj1.year);
  }
  get authorName() {
    return this.author;
  }
  
}
const books = data.map(({title,author,year}) => {return new Book(title,author,year)});
const sorted=books.sort((a, b) => a.authorName.localeCompare(b.authorName));
const json1=JSON.stringify(sorted);
console.log(json1);



const checkPublicationYear = (book) => {
  return new Promise((resolve, reject) => {
    if (book.year > 1950) {
      resolve(`${book.title} was published after 1950.`);
    } else {
      reject(`${book.title} was published before 1950.`);
    }
  });
};

checkPublicationYear(books[1])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

  
  

