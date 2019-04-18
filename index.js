const express = require('express');

const app = express();

app.get('/', (req, res) =>{
        res.send('<h1>Mian Amir Savvy,GOEY.CO</h1>');

});

app.listen(8080, () => {
    console.log('Listeniing to the port 8080');
});
