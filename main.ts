input.onButtonPressed(Button.A, function () {
    Counter += 1
    basic.showNumber(Counter)
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
