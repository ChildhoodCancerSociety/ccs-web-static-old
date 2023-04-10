const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')

app.use(fileUpload({
    // 50mb file limit
    limits: { fileSize: 50 * 1024 * 1024 },
    abortOnLimit: true
}));

app.get('/', (req, res) => {
    res.sendFile("/art-to-heart-index.html" , { root : __dirname});
})

// endpoint that will handle the form
app.post('/submit', (req, res) => {
    const {body, files} = req
    res.send({body, files})
})

const port = 3031

app.listen(port, () => {
    console.log(`Application is available at http://localhost:${port}`)
})