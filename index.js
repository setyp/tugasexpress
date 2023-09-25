const express = require('express')
const app = express()
const port = 3000

// const mhsrouter = require('./routes/mahasiswa');
const bodyPs = require('body-parser'); //import body-parser
app.use(bodyPs.urlencoded({ extended: false}));
app.use(bodyPs.json());
// app.use('api/mhs', mhsrouter);

const mhsRouter = require('./routes/mahasiswa');
app.use('/api/mhs', mhsRouter);

app.listen(port, () => {
    console.log(`aplikasi berjalan di http:://localhost:${port}`)
})

