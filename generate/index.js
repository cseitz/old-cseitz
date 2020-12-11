let fs = require('fs');
let fsp = fs.promises;
function templateString(str, vars) {
  str = str.split('\`').map(o => {
    return new Function("Object.assign(global, this); return `"+ o +"`;").call(vars)
  }).join('`');
  return str;
}

function build(inputPath, outputPath, vars) {
  return new Promise(async (resolve) => {
    let input = (await fsp.readFile(inputPath))
    .toString('utf8');
    let output = templateString(input, vars);
    resolve(await fsp.writeFile(outputPath, output))
  })
}

exports.build = build;

exports.rerequire = function(path) {
  let pth = require.resolve(path);
  if (pth in require.cache) {
    delete require.cache[pth]
  }
  return require(pth);
}

exports.watch = function(dir, cb_) {
  cb = function() {
    process.stdout.write('Compiling... ');
    cb_();
    console.log('\033[32;1mDone\033[0m')
  };
  if (process.argv.includes('--watch')) {
    cb();
    let delay;
    fs.watch(dir, (evt) => {
      clearTimeout(delay);
      delay = setTimeout(cb, 200);
    })
  } else {
    cb();
  }
}
