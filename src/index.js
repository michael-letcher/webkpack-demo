require('./style/style.scss');

class Car {
    manafacturer(car) {
        document.write(`I have a ${car}!`);
    }
}

const bmw = new Car;

bmw.manafacturer('bmw');