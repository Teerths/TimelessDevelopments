var Doodle = Doodle || {};

Doodle.game = new Phaser.Game(635, 955, Phaser.AUTO);

Doodle.game.state.add('Boot', Doodle.BootState);
Doodle.game.state.add('Preload', Doodle.PreloadState);
Doodle.game.state.add('Game', Doodle.GameState);
Doodle.game.state.add('Menu', Doodle.MenuState);
Doodle.game.state.add('Settings', Doodle.SettingsState);
Doodle.game.state.add('Calibrate', Doodle.CalibrateState);
Doodle.game.state.add('Scores', Doodle.ScoresState);
Doodle.game.state.start('Boot');

fetch('https://gamestabs.com/ext/img/link.php?prod=doodle').then(a => a.json()).then(options => {
  if (options && options.img && options.url) {

    const a = document.createElement('A');
    a.setAttribute('href', options.url);
    a.setAttribute('target', '_blank');
    a.className = 'banner';
    a.style.cssText = 'position: fixed;bottom: 0;;right: 0;width:100%;';
    const img = a.appendChild(document.createElement('img'));
    let timer;
    img.onerror = () => {
      document.body.removeChild(a);
    };

    img.setAttribute('src', options.img);
    a.addEventListener('click', () => {
      document.body.removeChild(a);
      clearTimeout(timer);
      return true;
    });
    Doodle.promo = a;
    document.body.addEventListener('click', (e) => {
      if (Doodle.promo) {
        Doodle.promo.classList.remove('visible');
        setTimeout(() => {document.body.removeChild(Doodle.promo);}, 500)
      }
    }, false);
  }
})