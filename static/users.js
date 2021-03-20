const faker = require('faker');
const { faker } = require('faker');

class User {
    constructor(id, firstName, lastName, phoneNumber, email, password){
        this.id = faker.internet.ip();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
};

module.exports = { User };