
class Person{
  constructor(firstName,lastName,role,profile,github){
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.profile = profile;
    this.github = github;
  }
}
const nikita = new Person("Nikita", "Thomas", "Team Lead", "This is a some saying", "http://github.com"); 
const dylan = new Person("Dylan", "Dislers" "Backend", "This is a some saying", "http://github.com");
const guillaume = new Person("Guillaume", "Savy", "Front End", "This is a some saying", "http://github.com");
const van = new Person("Van", "Jordan" "UI", "This is a some saying", "http://github.com");
const steve = new Person("Steve", "Rollins", "UI", "This is a some saying", "http://github.com");

const tabs = document.querySelector(".tabcontent");
const tablinks = document.querySelector(".tablinks");

