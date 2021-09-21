input.onButtonPressed(Button.A, function () {
    on = 1
    basic.showIcon(IconNames.Skull)
})
input.onButtonPressed(Button.B, function () {
    on = 0
})
let group = 0
let on = 0
radio.setTransmitPower(7)
basic.forever(function () {
    if (on == 1) {
        group = 0
        for (let index = 0; index < 255; index++) {
            radio.setGroup(group)
            radio.sendNumber(138)
            radio.sendNumber(randint(0, 3))
            radio.sendString("jam")
            group = group + 1
        }
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
