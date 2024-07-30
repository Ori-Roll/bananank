import express from 'express';
import cors from 'cors';
import routes from './routes';
import middleware from './middleware';

const app = express();

//TODO: this type in interfaces with whatever the response should be
type TempMessageResponse = {
  message: string;
};

var corsOptions = {
  origin: 'localhost',
};
//TODO: !!! This should only be used in development and cores should be set up properly
app.use(cors());

app.get<unknown, TempMessageResponse>('/', (req, res) => {
  res.send({ message: 'Should this be the site?' });
});

app.get('/api', (req, res) => {
  res.redirect('/api/v1');
});

app.use('/api/v1', routes);

app.use(middleware);

export default app;
