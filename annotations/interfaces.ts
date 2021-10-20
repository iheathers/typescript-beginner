interface Vehicle  {
    year: Date
}

const vehicle = {
    name: 'Tesla',
    year: new Date(),
    avaiable: true
}

const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.year);
}

printVehicle(vehicle)