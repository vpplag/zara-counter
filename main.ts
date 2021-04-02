input.onButtonPressed(Button.A, function () {
    if (Counter < 9) {
        Counter += 1
        basic.showNumber(Counter)
    } else {
        soundExpression.sad.play()
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    Counter += -1
    if (Counter < 0) {
        Counter = 0
    }
    basic.showNumber(Counter)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Counter = 0
    basic.showNumber(Counter)
})
let Counter = 0
Counter = 0
