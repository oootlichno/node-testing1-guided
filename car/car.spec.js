// Test away!
const Car = require('./car')
function foo(){
    return "the foo"
}
describe('our first tests', () => {
    test('sanity', () => {
        expect(5).toBe(5) // this will fail because 5 is not equal to 6
        expect(5).toBe(3 + 2) // this will fail because 5 is not equal to 6
        expect(5).toBe(5 * 1) // this will fail because 5 is not equal to 10
        expect(5).toBeDefined() // this will pass
    })

    test('objects', () => {
        const o = {a: 1}
        const oo = o // reassigning oo to the same reference as o
        expect(o).toBe(o) // this will pass (same reference)
        expect(oo).toBe(o) // this will pass (same reference)
    })

    test('objects again', () => {
        expect({a: 1}).toEqual({a: 1}) // toEqual checks deep equality for objects
    })
})
describe('foo function', () => {
    test('foo returns the foo', () => {
        expect(foo()).toBe('the foo')
        expect(foo()).toHaveLength(7)
    })
})
describe('Car class', () => {
    let prius
    beforeEach(() => {
        prius = new Car('toyota', 'prius')
    })
    test('it is defined', () => {
        expect(Car).toBeDefined()
        expect(Car).toBeInstanceOf(Function)
    })
    test('has model and make', () => {
        const pr = new Car('toyota', 'prius')
        expect(pr).toHaveProperty('make')
        expect(pr).toHaveProperty('model')
        expect(pr.model).toBeDefined()
        expect(pr.make).toBeDefined()
        expect(pr.make).toBe('toyota')
        expect(pr.model).toBe('prius')
        expect(pr).toMatchObject({make: 'toyota', model: 'prius'})

    })
    test('new cars start with the odometr at zero', () => {
        expect(prius).toHaveProperty('odometr', 0)
    })
    test('cars have a drive method', () => {
        expect(prius.drive).toBeDefined()
        expect(prius.drive).toBe(Car.prototype.drive)
    })
    test('drive method takes distance and increases odometr by that distance', () => {
        prius.drive(10)
        expect(prius.odometr).toBe(10)
        prius.drive(5)
        expect(prius.odometr).toBe(15)
    })
    test('driveAsync method resolves the updated odometr', async () => {
        const updatedOdometr = await prius.driveAsync(7)
        expect(updatedOdometr).toBe(7)
        updateOdometr = await prius.driveAsync(5)
        expect(updatedOdometr).toBe(7)
    })
})