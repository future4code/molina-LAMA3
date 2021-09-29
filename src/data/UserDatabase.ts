import { stringToUserRole, User } from "../business/entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public async save(user: User) {
        const userDB = {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.passwordHash,
            role: stringToUserRole(user.role)
        }

        await BaseDatabase.connection("LAMA_USUÁRIOS").insert(userDB).onConflict('id').merge();

        return user
    }

    async findUserByEmail(email: string) {
        const queryResponse = await BaseDatabase.connection("LAMA_USUÁRIOS").select('*').where({email: email})
    
        const userDB = queryResponse[0]

        if(!userDB) {
            return null
        }

        const user: User = {
            id: userDB.id,
            name: userDB.name,
            email: userDB.email,
            passwordHash: userDB.password,
            role: stringToUserRole(userDB.role)
        }

        return user
    }
}