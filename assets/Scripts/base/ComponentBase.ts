import Message from './Message';

const {ccclass, property} = cc._decorator;

@ccclass
export default class ComponentBase extends cc.Component {
    //接收消息方法
    ReceiveMessage(message: Message) {

    }
}
