const {app, port, express} = require('./app');
const databaseConnect = require('../src/database/conexion');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin: 'http://localhost:3000/',
    methods: "POST",
}));

app.listen(process.env.port, (req, res) => {
    try {
        databaseConnect();
        console.log('db online');
    } catch (error) {
        console.log(error);
    }
    console.log('server online');
});

app.use('/api', require('../src/routes/crearComercio'));