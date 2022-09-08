// Import dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');
const helpers = require('./utils/helpers');

// Require models
const { User, Post, Comment } = require('./models');

// Configure routes
const routes = require('./controllers');

// Set up database connection and sequelize store
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Set up handlebars engine
const hbs = exphbs.create({ helpers });

// Set up app and port
const app = express();
const PORT = process.env.PORT || 3001;

// Configure the session
const sess = {
    secret: 'quibvuqwbvoqrv',
    cookie: {
        maxAge: 500000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// Configure handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Use json and urlecoded middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure static routes
app.use(express.static(path.join(__dirname, 'public')));

// Use the controllers middleware
app.use(routes);

// Sync the database and start the app
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on localhost:${PORT}`));
});