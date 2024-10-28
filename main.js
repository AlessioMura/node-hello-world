console.log('hello node js');

const pin = process.env.PIN;

console.log(pin);

const argument = process.argv[2];

console.log(argument);


if (argument == 'admin' && pin == 666) {
    console.log('Welcome Admin');
} else {
    console.log('Access restricted');
}