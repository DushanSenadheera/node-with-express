import https from 'https';
import fs from 'fs'
import express, { Application } from "express";
import router from "./route";
import bodyParser from "body-parser";
import cors from "cors";

const app: Application = express();
const PORT = 3000;
const sslOptions = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

app.use(cors());
app.use(bodyParser.json());

app.use('/', router)

https.createServer(sslOptions, app).listen(3000, () => {
  console.log(`application run on port ${PORT}`);
});
