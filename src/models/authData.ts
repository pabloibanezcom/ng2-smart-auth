export class AuthData {
    token: string;
    email: string;
    authLevel: string;
    expirationDate: Date;
    constructor(token: string, email: string, authLevel: string, expirationDate?: Date) {
        this.token = token;
        this.email = email;
        this.authLevel = authLevel;
        this.expirationDate = expirationDate;
    }
}
