const express = require('express')
const cors = require('cors')

const routes = require('./routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

routes.get('/', (req, res) => {
    return res.send("Helo, World!")
})

var port = process.env.PORT || 3000

app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
})