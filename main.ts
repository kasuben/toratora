basic.forever(function () {
    serial.writeLine("" + input.temperature() + "" + input.lightLevel())
    basic.pause(5000)
    basic.clearScreen()
    basic.showString("" + (input.temperature()))
    basic.pause(5000)
    basic.clearScreen()
})
