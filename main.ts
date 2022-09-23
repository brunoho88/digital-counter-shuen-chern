input.onButtonPressed(Button.B, function () {
    count = 0
    basic.showNumber(count)
})
input.onGesture(Gesture.Shake, function () {
    count += 2
    basic.showNumber(count)
})
let count = 0
count = 1
basic.showNumber(count)
