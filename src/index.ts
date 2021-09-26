import express, {Express} from 'express'
import cors from 'cors'

import { AddressInfo } from "net";
import { UserController } from './controller/UserController';
// import { userRouter } from './controller/routes/Router';

export const app: Express = express();

app.use(express.json());
app.use(cors());

const userController = new UserController()

app.post("/user/signup", (req, res) => userController.signup(req, res))

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});

























