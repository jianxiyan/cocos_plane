
const {ccclass, property} = cc._decorator;

export default class Message {
    //类型
    Type: number;
    //命令
    Command: number;
    //参数
    Content: any;

    //构造方法
    constructor(type: number, command: number, content:any) {
        this.Type = type;
        this.Command = command;
        this.Content = content;
    }
}

export class MessageType {
    static TYPE_UI = 1;
    static TYPE_AUDIO = 2;

    static UI_REFRESH_SCORE = 101;
}
