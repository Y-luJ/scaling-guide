const express = require('express');
const cors = require('cors');
const app = express();
const port=3100;
const characters={
    'Dipper': 
    {Name: 'Dipper Mason Pines',
    Voice: 'Jason Ritter A. Smith Harrison',
    Age: '13 (born August 31, 1999)',
    Sign: 'the pine tree',
    Quote: 'Time to show Grunkle Stan how a real mystery hunter does it. Dipper out!'},
    'Ford': {
    Name: 'Stanford "Ford" Filbrick Pines',
    Voice: 'Jason J.K. Simmons',
    Age: '67 (born June 15, 1945)',
    Sign: 'the six-fingered arm',
    Quote: 'The dark, weird road I travel, I am afraid you cannot follow. Well, call me for dinner!'},
    'Mabel': {
    Name: 'Mabel Pines',
    Voice: 'Kristen Schaal',
    Age: '13 (born August 31, 1999)',
    Sign: 'the shooting star',
    Quote: 'I am the god of destruction!'},
    'Soos': {
    Name: 'Jesus "Soos" Alzamirano Ramírez',
    Voice: 'Alex Hirsch',
    Age: '22 (born July 13, 1990)',
    Sign: 'the question mark',
    Quote: 'My wisdom is both a blessing and a curse'},
    'Stan': {
    Name: 'Stanley Pines',
    Voice: 'Alex Hirsch',
    Age: '67 (born June 15, 1945)',
    Sign: 'the crescent',
    Quote: 'Body changes, honey! Body changes...'},
    'Wendy': {
    Name: 'Wendy Blerble Corduroy',
    Voice: 'Linda Cardellini',
    Age: '15 (born 1997)',
    Sign: 'the ice pack',
    Quote: 'Okay, I am not actually laid back. I am stressed, like, 24/7. Have you met my family?'},
}

// const whitelist = ['http://localhost:3000']
// const corsOptions= {
//     origin: function(origin, callback) {
//         if (whitelist.indexOf('Origin') !== -1) {
//         callback(null, true)
//     } else {
//         callback(new Error('Not allowed by CORS'))
//     }
//     } 
// }
  
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/characters', (req, res) => {
    console.log(characters);
    res.send(characters);
});


app.listen(port, ()=> console.log(`Example app listening at http://localhost:${port}`));
console.log(characters.Dipper);
