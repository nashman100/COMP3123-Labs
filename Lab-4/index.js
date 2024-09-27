const express = require('express');
const app = express();
const port = 3000;

//http://localhost:3000/hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS')
});

//http://localhost:3000/user
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Pritesh';
    const lastname = req.query.lastname || 'Patel';
    res.json({firstname, lastname});
});

//http://localhost:3000/user?firstname=John&lastname=Doe
app.post('/user/:firstname/:lastname', (req, res) => {
    const {firstname, lastname} = req.params;
    res.json({firstname, lastname}); 
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
});
