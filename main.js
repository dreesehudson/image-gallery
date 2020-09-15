let displayedImage = document.querySelector('.displayed-img');
let thumbBar = document.querySelector('.thumb-bar');

let btn = document.querySelector('button');
let overlay = document.querySelector('.overlay');

/* Looping through images */
for (let i = 1; i < 6; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', "images/pic" + i + ".jpg");
  thumbBar.appendChild(newImage);
  
  newImage.onclick = function(evt) {
    displayedImage.src = evt.target.src;
  };
  
};


/* Wiring up the Darken/Lighten button */
  
btn.onclick = function() {
  const buttonClassCheck = btn.getAttribute('class');
  if (buttonClassCheck === 'dark') {

    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'; 
  };
  
};