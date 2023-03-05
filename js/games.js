fetch('games.json').then(response => response.json()).then(games => {
    games.forEach(game => {
        document.getElementById('games').innerHTML += `<div class="game" data-name="${game[0]}"><div class="item" style="background: url('${game[2]}') 0% 0% / cover;" onclick="play('${game[3]}')"></div><div class="play-button"><i class="fa-solid fa-play"></i></div></div>`;
    });
});

function search() {
    var input = document.getElementById("search").value.toLowerCase();
  
    var games = document.querySelectorAll("#games .game");
  
    for (var i = 0; i < games.length; i++) {
      var game = games[i];
      var name = game.getAttribute("data-name").toLowerCase();
  
      if (name.indexOf(input) > -1) {
        game.style.display = "";
      } else {
        game.style.display = "none";
      }
    }
}