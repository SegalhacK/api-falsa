const { fake } = require('faker');
const faker = require('faker');

class Company {
    constructor() {
        this.id = faker.internet.ip();
        this.name = faker.Company.companyName();
        this.address = [{
            street: faker.address.streetName(),
            city: faker.address.city(),
            state: fake.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country()
        }];
    }
}

module.exports = { Company };