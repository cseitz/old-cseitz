let { build, rerequire, watch } = require('..');

watch(`${__dirname}`, () => {
  build(
    `${__dirname}/resume.md`,
    `${__dirname}/../../README.md`,
    rerequire(`${__dirname}/resume.js`)
  )
})
