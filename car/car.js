// Build a Car class!
module.exports = class Car {
    constructor(make, model){
        this.make = make
        this.model = model
        this.odometr = 0
    }
    drive(distance){
this.odometr += distance
    }
    async driveAsync(distance){
        this.odometr += distance
        return this.odometr

    }
}