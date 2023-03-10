import express, { Express, Request, Response } from "npm:express"
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

const app: Express = express();

app.use(express.json())

app.get('/test', (req: Request, res: Response)=>{
    res.send('Hello world!')
});

app.listen(config().PORT);
console.log(`Server ok on port ${config().PORT}`);

