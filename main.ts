let playerPos: Position;
let enterAreaFlag = true
let passCode = "1111"
while (true) {
    playerPos = player.position()
    if (playerPos.getValue(Axis.X) == 0 && playerPos.getValue(Axis.Z) == -1) {
        if (enterAreaFlag) {
            enterAreaFlag = false
            player.say("Please PassCode Number >>")
        }
        
        player.onChat(passCode, function OpenDoor() {
            let placePos: Position;
            placePos = world(0, -62, 0)
            player.say("OpenDoor!! It closes after three seconds...")
            blocks.place(REDSTONE_TORCH, placePos)
            for (let i = 3; i > 0; i += -1) {
                player.say(i)
                loops.pause(1000)
            }
            blocks.place(AIR, placePos)
            player.say("CloseDoor......")
        })
    } else {
        enterAreaFlag = true
    }
    
}
