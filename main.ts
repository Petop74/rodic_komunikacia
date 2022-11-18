input.onButtonPressed(Button.A, function () {
    radio.sendValue("zahraj", 0)
})
radio.onReceivedValue(function (name, value) {
    if (name == "place" && value == 0) {
        music.playMelody("C D E F G A B C5 ", 120)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
