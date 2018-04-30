export default class SoundPlayer {

    private readonly foo: string

    constructor() {
        this.foo = "bar"
    }

    async playSoundFile(fileName) {
        console.log(this.foo + "Playing sound file " + fileName)
    }
}