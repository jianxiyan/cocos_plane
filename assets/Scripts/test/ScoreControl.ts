import ComponentBase from '../base/ComponentBase';
import Message, { MessageType } from '../base/Message';
import UIManager from './UIManager';

const {ccclass, property} = cc._decorator;

@ccclass
export default class ScoreControl extends ComponentBase{

    score: number = 0;

    start () {
        //注册为ui的接收者
        UIManager.Instance.RegisterReceiver(this)
    }

    //接收到消息
    ReceiveMessage(msg: Message) {
        super.ReceiveMessage(msg);
        if(msg.Command === MessageType.UI_REFRESH_SCORE) {
            let num = <number>msg.Content;
            this.ChangeScore(num);
        }
    }

    //改变分数
    ChangeScore(score: number) {
        this.score += score;
        this.node.children[1].getComponent(cc.Label).string = this.score + '';
    }

}
