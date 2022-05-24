
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
// Cross Platform Compatibility
// app.use(cors());
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
// body-parser
app.use(express.json());
// setting routes
app.use('/', require('./routers/index'));
// Configure Dotenv File
dotenv.config({ path: '.env' });
const PORT = process.env.PORT;

// Server listing
app.listen(PORT, () => console.log(`Server is running on http://127.0.0.1:${PORT}`));