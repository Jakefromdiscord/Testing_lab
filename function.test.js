let functions = require('./function')

test('Return my two', () => {
    expect(functions.returnTwo()).toBe(2)
})

test("Return greeting", () => {
    expect(functions.greeting("james")).toBe("Hello james")
})

test("Return add", () => {
    expect(functions.add(1, 2)).toBe(3)
})