
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://minecraft.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * passcode
 */
//% weight=100 color=#0fbc11 icon=""
namespace passcode {
    /**
     * TODO: ドアを開ける処理
     */
    //% block
    export function OpenDoor() {
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
    }
}
