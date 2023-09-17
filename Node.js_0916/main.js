const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const app = express();
const port = 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//Views
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(expressLayouts);
app.set('layout', 'index.ejs');
app.set("layout extractStyles", true);
app.use(express.static('public'));

//Controllers
const homeController = require('./controllers/homeController.js');


app.get('/', homeController.home);

const postRouter = require('./routers/postRouter.js');
app.use('/post', postRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});