import FSMState from './FSMState';

const {ccclass, property} = cc._decorator;

export default class FSMManager {
    // 状态列表
    StateList: FSMState[] = [];
    // 当前状态ID
    CurrentIndex: number = -1;

    // 改变当前状态
    ChangeState(StateID: number) {
        // 改变状态机id
        this.CurrentIndex = StateID;
        // 调用新状态的enter方法
        this.StateList[this.CurrentIndex].OnEnter();
    }

    // 更新调用
    OnUpdate() {
        if(this.CurrentIndex != -1) {
            // 调用当前状态机的update方法
            this.StateList[this.CurrentIndex].OnUpdate();
        }
    }
}
