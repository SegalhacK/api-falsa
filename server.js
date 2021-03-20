const express = require("express");
const app = express();
const port = 8000;
const faker = require('faker');

const User = [{
	id: faker.internet.ip(),
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	phoneNumber: faker.phone.phoneNumber(),
	email: faker.internet.email(),
	password: faker.internet.password(),
}]

const Company = [{
	id: faker.internet.ip(),
	name: faker.company.companyName(),
	address: [{
		street: faker.address.streetName(),
		city: faker.address.city(),
		state: faker.address.state(),
		zipcode: faker.address.zipCode(),
		country: faker.address.country()
	}]
}]

// app.use(require('./routes/router'));

app.use('/static', express.static("static")); // Set STATIC route

// establece la carpeta X como la ruta de VIEWS (templates)
app.set('views', `${__dirname}/views`); // Set TEMPLATE folder with EJS
app.set('view engine', 'ejs'); // SET EJS views engine

// esto sirve para los POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/api/users/new', (req, res) => {
	res.json(User);
});

app.get('/api/companies/new', (req, res) => {
	res.json(Company);
	console.log(Company);
});

app.get('/api/user/company', (req,res) => {
	res.json({User, Company})
})


// Iniciar el servidor
app.listen(port, () => console.log(`Listening on port: ${port}`));
