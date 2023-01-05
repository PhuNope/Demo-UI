import { _decorator, Component, director, instantiate, Node, Prefab, ScrollView, UITransform } from 'cc';
import { LevelSelectItem } from '../item/LevelSelectItem';
import { Configs } from '../utils/Configs';
const { ccclass, property } = _decorator;

@ccclass('SelectLevelUI')
export class SelectLevelUI extends Component {
    @property(Prefab)
    private selectLevelItemPrefab: Prefab;
    //
    @property(ScrollView)
    private scrollView: ScrollView;
    //
    start() {
        let currentLv = 10;
        let statusLv = 0;
        let scrollHeight = 1000; //tinh chinh xac scroll height
        for (let i = 0; i < 100; i++) {
            let newLvItem = instantiate(this.selectLevelItemPrefab);
            newLvItem.getComponent(LevelSelectItem).setUp(i + 1, statusLv, (whichLevel) => {
                console.log('Which level', whichLevel);
                //save playerData
                director.loadScene(Configs.GAME_SCENE_NAME);
            });
            this.scrollView.content.addChild(newLvItem);
        }
        this.scrollView.content.getComponent(UITransform).setContentSize(720, scrollHeight);
    }

    update(deltaTime: number) {

    }
}


