const garage = []

const GarageManager = {
    store: function (car) {
        garage.push(car)
    },
    retrieve: function (carToFind) {
        return garage.find(car => car.make === carToFind.make && car.model === carToFind.model)
    },
    /*
        The inventory property is the only way for external code to
        read the value of the garage variable. There is no setter
        either. It is a read only property.
    */
    inventory: function () {
        return garage
    }

}

export default GarageManager