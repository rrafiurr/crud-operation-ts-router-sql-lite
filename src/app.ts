import  express  from "express";
import bodyParser from "body-parser";
const cors = require('cors') 
import router from "./routes/route";

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Enables CORS
app.use(bodyParser.json()); // Parses incoming requests with JSON payloads

// Routes
app.use('/api',router);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
