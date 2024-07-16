export class User {
    userId?: string;
    firstName?: string;
    lastName?: string;
    emailAdress?: string;
    phoneNumber?: string;
    address?: string;
    password?: string;

    constructor(userId?: string, firstName?: string, lastName?: string, emailAddress?: string, phoneNumber?: string, address?: string, password?: string )
    {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAdress = emailAddress;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.password = password;
    }
}
