import ComponentBase from './ComponentBase';
import Message, { MessageType } from './Message';
import MessageCenter from './MessageCenter';

const {ccclass, property} = cc._decorator;

@ccclass
export default class ManagerBase extends ComponentBase {
    //管理消息接收者对象
    ReceiveObj: {[key: number]: ComponentBase} = {};
    //管理消息接收者数组
    ReceiveList: ComponentBase[] = [];
    // 当前管理类具体接收消息类型
    MessageType: number;

    onLoad() {
        //设置当前管理类接收消息类型
        this.MessageType = this.SetMessageType();
        //把管理类添加到消息中心列表中
        MessageCenter.Managers.push(this);
    }

    //设置当前管理类消息类型
    SetMessageType() {
        return MessageType.TYPE_UI;
    }

    //注册消息监听
    RegisterReceiver(cb: ComponentBase) {
        this.ReceiveList.push(cb);
    }

    //接收消息方法
    ReceiveMessage(message: Message) {
        super.ReceiveMessage(message);
        //判断接收消息类型
        if(message.Type !== this.MessageType) {
            return;
        }
        //向下层分发消息
        for(let cb of this.ReceiveList) {
            cb.ReceiveMessage(message);
        }

    }
    
}
