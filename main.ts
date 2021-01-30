let buttonState = 0
basic.forever(function () {
    buttonState = pins.digitalReadPin(DigitalPin.P0)
    if (buttonState == 1) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
