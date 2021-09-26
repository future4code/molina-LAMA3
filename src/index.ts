import express, {Express} from 'express'
import cors from 'cors'

import { AddressInfo } from "net";
import { UserController } from './controller/UserController';
import { BandController } from './controller/BandController';
// import { userRouter } from './controller/routes/Router';

export const app: Express = express();

app.use(express.json());
app.use(cors());

const userController = new UserController()
const bandController = new BandController()

app.post("/user/signup", (req, res) => userController.signup(req, res))
app.post("/user/login", (req, res) => userController.login(req, res))

app.post("/band/create", (req, res) => bandController.createBand(req, res))
app.get("/band/:name", (req, res) => bandController.getBandByName(req, res))

app.post("/show/create", (req, res) => showController.createShow(req, res))

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

























