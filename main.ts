let gx = 2
let gy = 2
basic.forever(function () {
    if (input.acceleration(Dimension.X) <= -610) {
        gx = 0
    } else if (input.acceleration(Dimension.X) <= -200) {
        gx = 1
    } else if (input.acceleration(Dimension.X) <= 200) {
        gx = 2
    } else if (input.acceleration(Dimension.X) <= 610) {
        gx = 3
    } else {
        gx = 4
    }
    if (input.acceleration(Dimension.Y) <= -610) {
        gy = 0
    } else if (input.acceleration(Dimension.Y) <= -200) {
        gy = 1
    } else if (input.acceleration(Dimension.Y) <= 200) {
        gy = 2
    } else if (input.acceleration(Dimension.Y) <= 610) {
        gy = 3
    } else {
        gy = 4
    }
    basic.clearScreen()
    led.plot(gx, gy)
})
