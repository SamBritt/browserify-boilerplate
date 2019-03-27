import carFactory from "./carFactory"
import garage from "./garage"

// Create two cars using the function you imported
const mustang = carFactory("Ford", "Mustang")
const accord = carFactory("Honda", "Accord")
const santafe = carFactory("Hyundai", "Santa Fe")
const sierra = carFactory("GMC", "Sierra")

/// Store the cars in the garage
garage.store(mustang)
garage.store(accord)
garage.store(santafe)
garage.store(sierra)

console.table(garage.getInventory())
console.table(garage.retrieve(sierra))