serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    serial.writeValue("uT-abs", input.magneticForce(Dimension.Strength))
    basic.pause(500)
})
