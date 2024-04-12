const SITES = [
  {name: 'Thundermaps', url: 'http://www.celestialheavens.com/thundermaps/', image: 'Thundermaps'},
  {name: 'Emopairs', url: 'emopairs/', image: 'Emopairs'},
  {name: 'Gymprog', url: 'gymprog/', image: 'Gymprog'},
  {name: 'Tribetron', url: 'tribetron/', image: 'Tribetron'},
  {name: 'Collector', url: 'collector/', image: 'Collector'},
  {name: 'Vue-Rougelite', url: 'https://humakt83.github.io/vue-rougelite/example/dist/index.html', image: 'Rougelite'},
  {name: 'NG2-Sweeper', url: 'ng2sweeper/', image: 'ng2sweeper'},
  {name: 'Portfolio', url: 'portfolio', image: 'Portfolio'},
  {name: 'True-Magic-Group', url: 'true-magic-group', image: 'TMG'},
  {name: 'Angular Chess', url: 'ngchess/', image: 'ngchess'},
  {name: 'Treasure Hunt', url: 'treasurehunt', image: 'Treasurehunt'},
  {name: 'Muistipeli', url: 'muistipeli/', image: 'Muistipeli'},
  {name: 'Akun sivu', url: 'aku/', image: 'AkunSivu'},
  {name: 'Food-Calendar', url: 'food-calendar/', image: 'foodcal'},
  {name: 'Aqu-Choice', url: 'aqu-choice/', image: 'aqu-choice'},
  {name: 'Listmaker', url: 'listmaker/', image: 'listmaker'},
  {name: 'Superhot text', url: 'superhottxt/', image: 'superhottxt'},
  {name: 'Mysteries of Mass Effect', url: 'mysteries/', image: 'Mysteries'},
  {name: 'Aarreretki', url: 'aarreretki/', image: 'Aarreretki'}
]

const container = document.querySelector('#sitesContainer');
const sitesDOM = SITES
  .map(site => `<div class="site"><a href="${site.url}" title="${site.name}"><img src="img/${site.image}.jpg" alt="${site.name}"></a></div>`)
  .reduce((a, b) => a.concat(b), '');
container.innerHTML = sitesDOM;