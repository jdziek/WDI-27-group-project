const express     = require('express');
const app         = express();
const { port, dbURI }    = require('./config/environment');
const mongoose        = require('mongoose');
mongoose.plugin(require('./lib/toJSON'));
mongoose.Promise      = require('bluebird');
const morgan        = require('morgan');
const bodyParser    = require('body-parser');
const router      = require('./config/routes');
const customResponses = require('./lib/customResponses');
const errorHandler    = require('./lib/errorHandler');
const cors            = require('cors');

mongoose.connect(dbURI);

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(customResponses);
app.use(cors());
app.use('/api',router);


app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.use(errorHandler);

app.listen(port, () => console.log(`Express has started on port: ${port}`));
