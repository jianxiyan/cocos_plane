// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class BgControl extends cc.Component {
    
    @property
    speed: number = 50;

    start () {

    }

    update(dt) {
        //移动
        //便利子物体
        for(let bgNode of this.node.children) {
            //移动
            bgNode.y -= this.speed * dt;
            if(bgNode.y <= -1136) {
                bgNode.y += 1136 * 2;
            }
        }
    }

}
