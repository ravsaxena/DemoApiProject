const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });
});

app.get('/users', (request, response) => {
    response.json([{ "user": 'Asif' }, { "user": 'ayush' }, { "user": "ravi" }, { "user": "Abhimanyu" }, { "user": "chetanya arora" }]);
})


app.listen(process.env.PORT, () => {
    console.log("Server is listening on port 8081");
});