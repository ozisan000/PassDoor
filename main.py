def OpenDoor():
    passcode.open_door()

enterAreaFlag = True;
passCode = "1111";

while True:
    playerPos = player.position();

    if playerPos.get_value(Axis.X) == 0 and playerPos.get_value(Axis.Z) == -1:
        if enterAreaFlag:
            enterAreaFlag = False;
            player.say("Please PassCode Number >>");
        player.on_chat(passCode, OpenDoor);
    else:
        enterAreaFlag = True;
