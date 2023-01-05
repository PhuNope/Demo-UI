import { _decorator, Component, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MenuController')
export class MenuController extends Component {
    // @property(Prefab)
    // private selectLevelUIPrefab: Prefab;

    @property(Node)
    private selectLevelUI: Node;
    start() {

    }
    public onStart() {
        //show select lv ui
        this.selectLevelUI.active = true;
    }
    private startGame() {

    }
    update(deltaTime: number) {

    }
}


