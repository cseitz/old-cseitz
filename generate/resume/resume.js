let links = {};
let icons = {
  'atom': ['Atom', 'https://atom.io'],
  'nodejs': ['Vue', 'https://nodejs.org'],
  'vue': ['Vue', 'https://vuejs.org'],
  'html': ['HTML', 'https://developer.mozilla.org/en-US/docs/Web/HTML'],
  'css': ['CSS', 'https://developer.mozilla.org/en-US/docs/Web/CSS'],
  'sass': ['SASS', 'https://sass-lang.org'],
  'javascript': ['JavaScript', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'],
  'typescript': ['TypeScript', 'https://www.typescriptlang.org/'],
  'lua': ['Lua', 'https://www.lua.org/'],
  'npm': ['NPM', 'https://npmjs.com'],
  'nginx': ['NGINX', 'https://www.nginx.com/'],
  'docker': ['Docker', 'https://www.docker.com/'],
  'raspberry-pi': ['Raspberry Pi', 'https://www.raspberrypi.org/'],
  'mongodb': ['MongoDB', 'https://www.mongodb.com/'],
  'mysql': ['MySQL', 'https://www.mysql.com/'],
  //'lua': ['Vue', 'https://nodejs.org'],
}

exports.years = Math.floor(
  (Date.now() - (new Date('February 12 2012')).getTime())
  / (365.25 * 24 * 60 * 60 * 1000)
);



exports.what = 'omg';

exports.icons = Object.entries(icons).map(([ name, extra ]) => {
  let [ alt, link ] = extra;
  let link_title = 'Link_' + alt.split(' ').join('');
  links[link_title] = link;
  return `[<img align="left" alt="${alt}" width="26px" src="https://raw.githubusercontent.com/github/explore/master/topics/${name}/${name}.png">][${link_title}]`
}).join('\r\n');

exports.links = Object.entries(links).map(([ title, link ]) => {
  return `[${title}]: ${link}`
}).join('\r\n');
