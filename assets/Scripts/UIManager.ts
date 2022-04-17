import ManagerBase from './base/ManagerBase';
import { MessageType } from './base/Message';

const {ccclass, property} = cc._decorator;

@ccclass
export default class UIManager extends ManagerBase {
    static Instance: UIManager;

    onLoad() {
        super.onLoad();
        UIManager.Instance = this;
    }

    //接收的消息类型
    SetMessageType() {
        return MessageType.TYPE_UI;
    }
}
