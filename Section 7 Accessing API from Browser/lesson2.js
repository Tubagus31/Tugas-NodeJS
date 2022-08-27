app.get('/weather', (req, res) => {
    // All query string key/value pairs are on req.query
    res.send('You provided "' + req.query.address + '" as the address.')
})

const greeter = (name = 'user', age) => {
    console.log('Hello ' + name)
}
greeter('Andrew') // Will print: Hello Andrew
greeter() // Will print: Hello user