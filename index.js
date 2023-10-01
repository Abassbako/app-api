const express = require('express');
const bookRoutes = require('./routers/bookRoutes');

const dotenv = require('dotenv')
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
    console.log(`${ req.path } ${ req.method }`);
    next();
});
app.use('/api/v1/books', bookRoutes);

const PORT = process.env.PORT || PORT;

app.listen(PORT, () => console.log(`app listening on port ${ PORT }`));