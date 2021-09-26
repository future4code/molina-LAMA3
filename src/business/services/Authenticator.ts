import * as jwt from "jsonwebtoken";

interface AuthenticationData {
    id: string;
}

export class Authenticator {

    generateToken(info: AuthenticationData): string{

        const token = jwt.sign(
            {id: info.id},
            process.env.JWT_KEY as string,
            {expiresIn: "10 days"}
        );
        return token;
    }

    getTokenData(token: string): AuthenticationData {

        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        );

        return payload as AuthenticationData;

    }
}