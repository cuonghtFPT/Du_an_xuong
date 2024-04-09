const express = require('express');
const app = express();
const port = 3000;
const logger = require('morgan');

const database = require('./config/db');
const apiAlbum = require('./router/Albumapi');
const apiHome = require('./router/Homeapi');
const apiSanpham = require('./router/sanphamapi');
const apiService = require('./router/serviceapi');
const apiServiceDetail = require('./router/servicedetailapi');
const apiRegister = require('./router/Registerapi');


app.use(express.json());
app.use(logger('dev'));

app.use('/album', apiAlbum);
app.use('/home', apiHome);
app.use('/sanpham', apiSanpham);
app.use('/service', apiService);
app.use('/servicedetail', apiServiceDetail);
app.use('/register', apiRegister);

// Gọi phương thức connect từ module ./config/db
database.connect();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('WEB');
});

module.exports = app;
