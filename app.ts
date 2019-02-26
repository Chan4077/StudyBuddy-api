import express from 'express';
import path from 'path';
import responseTime from 'response-time';
import favicon from 'serve-favicon';
const port = process.env.PORT || 3000;
import { routes } from './routes';
const app = express();

// Sets the document title
// See https://stackoverflow.com/a/54356269/6782707 for more info
app.set('title', 'StudyBuddy API');

// Adds the X-Response-Time header to indicate how long a request took
// See https://github.com/expressjs/response-time for more info
app.use(responseTime());

// Add a favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use('/v1', routes);
app.listen(port, () => {
  console.log(`App is listening on port ${port}.`);
});
