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
            passcode.OpenDoor()
        })
    } else {
        enterAreaFlag = true
    }
    
}
