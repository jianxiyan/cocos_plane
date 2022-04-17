import { MessageType } from '../base/Message';
import MessageCenter from '../base/MessageCenter';

const {ccclass, property} = cc._decorator;

@ccclass
export default class Player extends cc.Component {

    start () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, (event) => {
            //增加分数
            MessageCenter.SendCustomMessage(MessageType.TYPE_UI, MessageType.UI_REFRESH_SCORE, 10);
        })
    }

    // update (dt) {}
}
