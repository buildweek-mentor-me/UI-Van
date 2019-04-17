
class Person{
  constructor(firstName,lastName,role,profile,github){
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.profile = profile;
    this.github = github;
  }
}
const people = [];
people[0] = new Person("Nikita", "Thomas", "Team Lead", "This is a some saying", "http://github.com"); 
people[1] = new Person("Dylan", "Dislers", "Backend", "This is a some saying", "http://github.com");
people[2] = new Person("Guillaume", "Savy", "Front End", "This is a some saying", "http://github.com");
people[3] = new Person("Van", "Jordan", "UI", "This is a some saying", "http://github.com");
people[4] = new Person("Steve", "Rollins", "UI", "This is a some saying", "http://github.com");

const  tabcontent = document.querySelector('.tabcontent');
const tablinks = document.querySelectorAll('.tablinks');

const fullname = document.querySelector('.name');
const role = document.querySelector('.role');
const profile = document.querySelector('.profile');
const git = document.querySelector('.github');


tablinks.forEach(function(tablink){
  people.forEach(function(person){
    tablink.addEventListener('click', function(event){
     if(event.target.classList[1] === person.firstName){
        fullname.textContent = person.firstName + " " + person.lastName;
        role.textContent = person.role;
        profile.textContent = person.profile;
        git.textContent= person.github;

      }
    });
  });
});

//start event listeners for github buttons
const van = document.querySelector('.van');
const steve = document.querySelector('.steve');
const nikita = document.querySelector('.nikita');
const guillaume = document.querySelector('.guillaume');
const dylan = document.querySelector('.dylan');

van.addEventListener('click', function(event){
location.href = "https://github.com/vanman9599";
});
steve.addEventListener('click', function(event){
  location.href = "https://github.com/greenhornsr";
  });
  nikita.addEventListener('click', function(event){
    location.href = "https://github.com/OmegaWulf";
    });
    guillaume.addEventListener('click', function(event){
      location.href = "https://github.com/guillsav";
      });
      dylan.addEventListener('click', function(event){
        location.href = "https://github.com/dislersd";
        });

// rollover effect for github buttons on about page
const githubBtns = document.querySelectorAll('.github-btn');
githubBtns.forEach(function(btn){
  btn.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = 'limegreen';
  });
  btn.addEventListener('mouseout', function(event){
    event.target.style.backgroundColor = 'forestgreen';
  });
});

//prevent e-newsletter form from submitting
const form = document.querySelector('.subscribe')
form.addEventListener('click', function(event){
  event.preventDefault();
});

//add rollover effect to buttons
const buttons = document.querySelectorAll('.learn-more-btn');
buttons.forEach(function(btn){
  btn.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = "black";
    event.target.style.fontColor = "white";
  });

  btn.addEventListener('mouseout', function(event){
    event.target.style.backgroundColor = "white";
    event.target.style.fontColor = "black";
  });
});