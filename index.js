const express = require('express')
const app = express();
const cors=require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
const courseCategory = require('./data/coursescategory.json');
const allcategory = require('./data/allcategory.json');

app.get('/', (req, res) => {
    res.send('News API runing');
});

app.get('/courses-category', (req, res) => {
    res.send(courseCategory)
})

app.get('/allcategory/:id', (req, res) => {
    const id = req.params.id;
    
    //console.log(req.params.id);
})

app.listen(port, () => {
   console.log('run',port) 
})