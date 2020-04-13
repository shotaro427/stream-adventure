var concat = require('concat-stream')

process.stdin.pipe(concat(function (buf) {
    var s = buf.toString().split('').reverse().join('')
    console.log(s)
}))