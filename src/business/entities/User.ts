import { CustomError } from "../error/CustomError";

export enum UserRole {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

// export class User {
//         constructor (
//             public readonly id: string,
//             public readonly name: string,
//             public readonly email: string,
//             public readonly passwordHash: string,
//             public readonly role: UserRole
//         ) {}

export interface User {
    id: string,
    name: string,
    email: string,
    passwordHash: string,
    role: UserRole
}

export function stringToUserRole(input: string): UserRole {
    switch (input) {
        case "NORMAL":
            return UserRole.NORMAL;
        case "ADMIN":
            return UserRole.ADMIN;
        default:
            throw new CustomError(422, "Invalid user role");
        }
    }

