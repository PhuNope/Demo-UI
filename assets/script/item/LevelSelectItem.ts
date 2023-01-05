import { _decorator, Component, Label, Node, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LevelSelectItem')
export class LevelSelectItem extends Component {
    @property(Label)
    private LblLvNumber: Label;
    @property(SpriteFrame)
    private statusSpFrame: SpriteFrame[] = [];
    @property(Sprite)
    private statusSprite: Sprite;
    private status: number;
    private level: number;
    private selectCallback: CallableFunction;
    start() {

    }
    public setUp(level: number, status: number, selectCallback: CallableFunction) {
        this.status = status;
        this.level = level;
        this.selectCallback = selectCallback;
        this.LblLvNumber.string = '' + this.level;
        this.statusSprite.spriteFrame = this.statusSpFrame[status];
    }
    private onTouch() {
        if (this.selectCallback) {
            this.selectCallback(this.level);
        }
    }
    update(deltaTime: number) {

    }
}


