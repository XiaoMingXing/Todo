import SoundPlayer from "./SoundPlayer"

export default class SoundPlayerConsumer {
    private soundPlayer: SoundPlayer

    constructor() {
        this.soundPlayer = new SoundPlayer()
    }

    async playSomethingCool() {
        const coolSoundFileName = "song.mp3"
        return await this.soundPlayer.playSoundFile(coolSoundFileName)
    }
}