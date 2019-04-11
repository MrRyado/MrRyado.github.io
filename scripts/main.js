var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('h1').onclick = function(){
    alert('stop poking me');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lebronCelt.jpg') {
      myImage.setAttribute ('src','images/lebronLakers.jpg');
    } else {
      myImage.setAttribute ('src','images/lebronCelt.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }