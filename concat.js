var fs = require('fs')
var http = require('http')
var through = require('through2')

var server = http.createServer(function (req, res) {
    if (req.method == 'POST') {
        req.pipe(through(function (line, _, next) {
            this.push(line.toString().toUpperCase())
            next()
        })).pipe(res)
    }
    else res.end("send me a POST\n")
})

server.listen(Number(process.argv[2]))