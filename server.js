const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.render('index', {
        title: 'platzigram'
    });
});
app.get('/signup', function (req, res) {
    res.render('index', {
        title: 'platzigram - SignUp'
    });
});
app.get('/signin', function (req, res) {
    res.render('index', {
        title: 'platzigram - SignIn'
    });
});

app.listen(8000, function (err) {
    if (err) return console.log(err), process.exit(1)
    console.log('app is running');
})