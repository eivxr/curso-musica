import express from 'express';
import lecciones from './lecciones.js'
import home from './home.js'
import test from './test.js'

const app = express();

app.use('/lecciones', lecciones);

app.use('/', home);

app.use('/test', test)

export default app;