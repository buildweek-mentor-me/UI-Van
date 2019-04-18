//This is all functionality of About.html page
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