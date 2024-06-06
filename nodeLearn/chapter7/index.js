const express = require('express');
const path = require('path');
const { logger } = require('./middleware/logEvents');
const cors = require('cors');
const errorhandler = require('./middleware/errorhandler');
const corsoption = require('./config/config');
const app = express();
const PORT = process.env.PORT || 3500;

app.use(logger);
app.use(cors(corsoption));

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, './public')));
app.use('/', require('./routes/root'));
app.use('/subdir', require('./routes/routes'));
app.use('/employees',require('./routes/api/employees'))
app.all('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.use(errorhandler)

app.listen(PORT, () => console.log(`The server is running on http://localhost:${PORT}`));
