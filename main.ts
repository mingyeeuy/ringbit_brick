radio.onReceivedNumber(function (receivedNumber) {
    num = receivedNumber
})
input.onGesture(Gesture.ScreenUp, function () {
    RingbitCar.back()
})
input.onButtonPressed(Button.A, function () {
    RingbitCar.turnright()
})
input.onGesture(Gesture.ScreenDown, function () {
    RingbitCar.brake()
})
input.onButtonPressed(Button.AB, function () {
    RingbitCar.forward()
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.turnleft()
})
let num = 0
radio.setGroup(33)
num = 0
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
RingbitCar.forward()
basic.forever(function () {
    if (num == 1) {
        RingbitCar.forward()
    } else if (num == 2) {
        RingbitCar.turnleft()
    } else if (num == 3) {
        RingbitCar.turnright()
    } else if (num == 4) {
        RingbitCar.back()
    } else if (num == 5) {
        RingbitCar.brake()
    } else {
        num = 0
    }
})
