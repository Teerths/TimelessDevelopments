document.addEventListener('DOMContentLoaded', function() {
  let savedThemeTwo = localStorage.getItem('theme');
  if (savedThemeTwo) {
    let root = document.querySelector(':root');
    let particles = document.getElementById('particles-js');
    if (savedThemeTwo === 'default') {
      root.className = '';
      particles.className = '';
    } else {
      root.className = savedThemeTwo;
      particles.className = savedThemeTwo;
    }
  }
});

const code = `
    <nav>
        <a href="index.html">Home</a>
        <a href="settings.html">Settings</a>
        <a href="games.html">Games</a>
        <a href="apps.html">Apps</a>
        <a href="about.html">About</a>
    </nav>
    <div id="cursor"></div>`;

document.body.innerHTML += code;

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

function cloakTwo(icon, title) {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = icon;
  document.title= title;
  document.getElementsByTagName('head')[0].appendChild(link);
  
  localStorage.setItem('icon', icon);
  localStorage.setItem('title', title);
}

var savedIconTwo = localStorage.getItem('icon');
var savedTitleTwo = localStorage.getItem('title');
if (savedIconTwo && savedTitleTwo) {
  cloakTwo(savedIconTwo, savedTitleTwo);
} 

let savedAntiCloseTwo = localStorage.getItem('antiClose');
if (savedAntiCloseTwo === 'true') {
  antiCloseTwo();
}

function antiCloseTwo() {
  window.top.addEventListener('beforeunload',function(e){
    e.preventDefault();
    e.returnValue='Are you sure you want to leave?';
  });
}

function play(game) {
  var play = document.getElementById('play');
  var screen = document.querySelector('iframe');
  if (play.style.display == "block") {
      play.style.display = "none";
      screen.src = "";
  } else {
      play.style.display = "block";
      screen.src = game;
  }
}

function close() {
  document.getElementById('frame').remove();
}