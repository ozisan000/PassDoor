def OpenDoor():
    placePos = world(0, -62, 0);
    player.say("OpenDoor!! It closes after three seconds...");
    blocks.place(REDSTONE_TORCH, placePos);
    for i in range(3,0,-1):
        player.say(i);
        loops.pause(1000);
    blocks.place(AIR, placePos);
    player.say("CloseDoor......");

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
