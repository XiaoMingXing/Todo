import SoundPlayerConsumer from "./SoundPlayerConsumer"

const mockFn = jest.fn(() => {
    console.log("MOCK ASYNC FUNC 1")
    return Promise.resolve({status: 200})
})

jest.mock("./SoundPlayer", () => {
    return jest.fn().mockImplementation(() => {
        return {
            playSoundFile: mockFn
        }
    })
})

let soundPlayerCosnumer

describe("Test mock class", () => {

    beforeEach(() => {
        soundPlayerCosnumer = new SoundPlayerConsumer()
        mockFn.mockClear()
    })

    describe("First way to mock the class", () => {

        it("use the default implementation of function", () => {
            soundPlayerCosnumer.playSomethingCool()
            expect(mockFn).toHaveBeenCalledTimes(1)
        })

        it("should mock the async function", async () => {
            mockFn.mockImplementation(() => console.log("MOCK FUNC 2"))
            await soundPlayerCosnumer.playSomethingCool()
            expect(mockFn).toHaveBeenCalledTimes(1)
        })

        it("change the implementation of function", () => {
            mockFn.mockImplementation(() => console.log("MOCK FUNC 3"))
            soundPlayerCosnumer.playSomethingCool()
            expect(mockFn).toHaveBeenCalledTimes(1)
        })
    })

    describe("The way to mock async function inside of class", () => {
        it("should call one time", () => {
            mockFn.mockImplementation(() => {
                Promise.resolve("VALUE")
                console.log("MOCK ASYNC FUNC1")
            })
            soundPlayerCosnumer.playSomethingCool()
            expect(mockFn).toHaveBeenCalledTimes(1)
        })

        it("should still call one time", () => {
            mockFn.mockImplementation(() => {
                Promise.reject("VALUE2")
                console.log("MOCK ASYNC FUNC2")
            })
            soundPlayerCosnumer.playSomethingCool()
            expect(mockFn).toHaveBeenCalledTimes(1)
        })
    })
})
