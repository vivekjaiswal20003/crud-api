import "dotenv/config";
import express, { urlencoded } from "express";
import routes from "./routes/index.js";
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) => {
  return res.send("Hi Everyone.");
});

// * Routes
app.use(routes);


const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// If the port is already in use, retry with another port
server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is in use. Trying another port...`);
    server.listen(0); // Use any available port
  } else {
    console.error(`Server error: ${error.message}`);
  }
});
