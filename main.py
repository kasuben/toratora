def on_forever():
    serial.write_line("" + str(input.temperature()))
    basic.pause(5000)
    basic.clear_screen()
    basic.show_string("" + str((input.temperature())))
    basic.pause(5000)
    basic.clear_screen()
basic.forever(on_forever)
