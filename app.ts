import express from 'express';
import path from 'path';
import responseTime from 'response-time';
import favicon from 'serve-favicon';
const port = process.env.PORT || 3000;
import { routes } from './routes';
const app = express();

// Sets the document title
// See https://stackoverflow.com/a/54356269/6782707 for more info
// Currently not working
// app.set('title', 'StudyBuddy API');

// Adds the X-Response-Time header to indicate how long a request took
// See https://github.com/expressjs/response-time for more info
app.use(responseTime());

// Add a favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Support parsing request body
// Note: Only works on versions 4.16.0 and up
app.use(express.json());

// Use routes exported from the routes folder
app.use('/v1', routes);

// Lastly, listen to the port set to the PORT environment variable, or 3000 if none exists
app.listen(port, () => {
  console.log(`App is listening on port ${port}.`);
});
