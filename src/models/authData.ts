export class AuthData {
    token: string;
    email: string;
    authLevel: string;
    data: any;
    expirationDate: Date;
    constructor(token: string, email: string, authLevel: string, data?: any, expirationDate?: Date) {
        this.token = token;
        this.email = email;
        this.authLevel = authLevel;
        this.data = data;
        this.expirationDate = expirationDate;
    }
}
