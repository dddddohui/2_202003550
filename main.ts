input.onButtonPressed(Button.A, function () {
    basic.showNumber(70 * steps)
    basic.showString("m")
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
    basic.showNumber(steps)
    if (10000 <= steps) {
        basic.showString("Very good!")
        for (let index = 0; index < 3; index++) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    steps = 0
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0.05 * steps)
    basic.showString("Kcal")
})
let steps = 0
steps = 0
music.playTone(262, music.beat(BeatFraction.Whole))
music.playTone(294, music.beat(BeatFraction.Whole))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(349, music.beat(BeatFraction.Whole))
music.playTone(392, music.beat(BeatFraction.Double))
