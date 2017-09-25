import express from 'express';
import bodyParser from 'body-parser';
import users from './routes/receipt';

let app = express();

app.use(bodyParser.json());

app.use('/api/receipt', receipt);

app.listen(8000, function(){
 	console.log('Running on LocalHost: 8000');
});

