const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(morgan('dev'));

//login route
const authRoutes = require('./routes/auth');
app.use('/api/auth ', authRoutes);



//test server health running or no 
app.get('/api/health', (req, res) => {
    res.send('serveur is running');
});

//test bd connected or no
app.get('/api/test-db', async (req, res) => {
    try {
        const {pool} = require('./config/db');
        const  result = await pool.query('SELECT NOW() as date_actuelle');
        res.json ({
            message: 'DB connectée',
            date:result.rows[0].datea_actuelle
        });
    } catch (err) {
        res.status(500).json({
            message: 'Erreur de connexion à la DB',
            erreur: err.message
        });
    }
});

const start = async () => {
    await connectDB();
    app.listen(process.env.PORT, ()=> {
        console.log(`serveur is running in port: ${process.env.PORT}`);
    });
};
start();

