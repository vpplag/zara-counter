input.onButtonPressed(Button.A, function () {
    Counter += -1
    if (Counter < 0) {
        Counter = 0
    }
    basic.showNumber(Counter)
})
input.onButtonPressed(Button.B, function () {
    if (Counter < 9) {
        Counter += 1
        basic.showNumber(Counter)
    } else {
        soundExpression.sad.play()
        basic.showIcon(IconNames.No)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Counter = 0
    basic.showNumber(Counter)
})
let Counter = 0
Counter = 0
for (let y = 0; y <= 4; y++) {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, y)
        basic.pause(100)
        basic.clearScreen()
    }
}
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.clearScreen()
