const express = require("express")
const path = require('path')
const routing = require('./Source Code/js/routes')

const app = express()

const publicDirectory = path.join(__dirname, './Source Code')
app.use(express.static(publicDirectory))
console.log(__dirname)

//define routes
app.use('/', routing.pagesRouting)
app.use('/auth', routing.authRouting)
app.use('/prestasi', routing.prestasiRouting)
app.use('/admin', routing.adminRouting)

//Start on port 5000
app.listen(5000, () => {
    console.log("server started at port 5000")
})
