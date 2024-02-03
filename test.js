//student details
//how to print the value of an object
//adding a constructor

function Student(name,age,cgpa,lang){ //creating a constructor.constructor ei 4 ta jinish recieve korte parbe.Oi single object k clarify korbar jonno ei holo template ja help korbe onek beshi
this.name=name;//ekhane this.name holo ekta variable ja name k store kore rakhbe.
this.age=age;
this.cgpa=cgpa;
this.lang=lang;
this.display =function (){ //ei holo constructor er majhe function create korar upay.
console.log(this.name);
console.log(this.age);
console.log(this.cgpa);
console.log(this.lang);
}
}
// var name ="Anisul Islam";
// var age=27;
// var cgpa=3.92
// var lang =["Bengali","hindi","English"];
// var student =new Student()

// var student1 ={ //single object
//     name:"Nazmul Hasan",
//     age: 27,
//     cgpa: 3.436,
//     lang: ["Bengali","hindi","English"]
// }
//ekhon uporokto bishoy ta k normally likhleo output pete parii.Ja holo
var student1 =new Student("Nazmul Hasan",27,3.436,["Bengali","hindi","English"]);// oger single object jemon output show koresilo etao tai korbe.
// console.log(student.name);

// var student2 ={ //single object
//     name:"Nazmul Hasan",
//     age: 27,
//     cgpa: 3.436,
//     lang: ["Bengali","hindi","English"]
// }
var student2=new Student("Bandhon",24,3.2,["Bengali","hindi","English"]);
 var student3=new Student("Foridul Islam",24,3.3,["Bengali","hindi","English"]);
 var student4=new Student("Monjurul Islam",24,3.1,["Bengali","hindi","English"]);
 var student5=new Student("Salman F Haq",24,3.2,["Bengali","hindi","English"]);
// var student3 ={ //singlrobject
//     name:"Nazmul Hasan",
//     age: 27,
//     cgpa: 3.436,
//     lang: ["Bengali","hindi","English"]
// }

// var student4 ={ //single object
//     name:"Nazmul Hasan",
//     age: 27,
//     cgpa: 3.436,
//     lang: ["Bengali","hindi","English"]
// }

// var student5 ={ //single object
//     name:"Nazmul Hasan",
//     age: 27,
//     cgpa: 3.436,
//     lang: ["Bengali","hindi","English"]
// }
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.cgpa);
// console.log(student1.lang);

//how to add a function inside a constructor 10 number line  e details bola ase
// uporer function create korbar por ja hobe
student1.display();
student2.display();
student3.display();
student4.display();
student5.display();
