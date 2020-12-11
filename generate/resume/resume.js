let links = {};
let icons = {
  'atom': ['Vue', 'https://nodejs.org'],
  'nodejs': ['Vue', 'https://nodejs.org'],
  'vue': ['Vue', 'https://nodejs.org'],
  'html': ['Vue', 'https://nodejs.org'],
  'css': ['Vue', 'https://nodejs.org'],
  'sass': ['Vue', 'https://nodejs.org'],
  'javascript': ['Vue', 'https://nodejs.org'],
  'typescript': ['Vue', 'https://nodejs.org'],
  'lua': ['Vue', 'https://nodejs.org'],
  'npm': ['Vue', 'https://nodejs.org'],
  'nginx': ['Vue', 'https://nodejs.org'],
  'docker': ['Vue', 'https://nodejs.org'],
  'raspberry-pi': ['Vue', 'https://nodejs.org'],
  'mongodb': ['Vue', 'https://nodejs.org'],
  'mysql': ['Vue', 'https://nodejs.org'],
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
