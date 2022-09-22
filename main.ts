function Stuff () {
    basic.showIcon(IconNames.Duck)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
}
input.onButtonPressed(Button.A, function () {
    while (true) {
        Stuff()
    }
})
input.onButtonPressed(Button.B, function () {
    Stuff()
})
basic.showIcon(IconNames.Angry)
