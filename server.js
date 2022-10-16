// Third-Party Modules
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bootstrap from 'bootstrap'

// ES Modules for __dirname fix
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Import Routes
import indexRouter from './app/routes/index.route.server.js';

// Instantiate Express Application
const app = express();

// Set up Middlewares

    // Setup ViewEngine EJS
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'/client')));
app.use(session({
    secret: 'MySecret',
    saveUninitialized: false,
    resave: false
}));
app.use(bootstrap());

// Use Routes
app.use('/', indexRouter);

app.listen(3000);