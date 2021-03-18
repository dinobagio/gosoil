let r = 0
let t = 0
basic.showString("Hello!")
led.setBrightness(64)
let d = 1
basic.forever(function () {
    t = input.temperature()
    pins.analogWritePin(AnalogPin.P1, 1023)
    r = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P1, 0)
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + (t))
        basic.showString("" + (r))
        basic.pause(5000)
    }
    serial.writeString("" + d + ":" + r + ":" + t)
    basic.pause(5000)
})
