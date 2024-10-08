import express, { Application } from "express";
import router from "./route";
import bodyParser from "body-parser";
import cors from "cors";

const app: Application = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/', router)

app.listen(3000, () => {
  console.log(`application run on port ${PORT}`);
});
