import { Person } from "./Person";

let person1 = new Person("Guillermo", "Spanish", "tester", 3)

let person2 = new Person("Matt", "USA", "developer", 2)

let person3 = new Person("Kevin", "Canadian", "manager", 5)

let person4 = new Person("Guillermo", "Spanish", "tester", 3)

person1.setName("Alvaro")

console.log(person1.getName());


console.log(person1.attributesToString());


console.log(person2.getProffesion());

person3.print();



console.log(person1.isSamePerson(person4));
