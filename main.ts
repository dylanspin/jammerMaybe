let on = 0
let group = 0
let strength = 0
input.onButtonPressed(Button.A, function () {
    on = 1
    basic.showIcon(IconNames.Skull)
})
input.onButtonPressed(Button.B, function () {
    on = 0
})
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
        if (strength < 7) {
            strength = strength + 1
        } else {
            strength = 0
        }
        radio.setTransmitPower(strength)
        basic.showNumber(strength)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
