import { _decorator, Component, Node } from 'cc';
import { GameModel } from '../model/GameModel';
import { ResourceUtils } from '../utils/ResourceUtils';
import { Utils } from '../utils/Utils';
const { ccclass, property } = _decorator;

@ccclass('GameController')
export class GameController extends Component {
    @property(Node)
    gameModelNode:Node;
    gameModel:GameModel;
    start() {
        this.gameModel = this.gameModelNode.getComponent(GameModel);
        this.beginLevel();
    }
    beginLevel(){
        this.gameModel.levelLb.string = 'Level 01';
        Utils.Log('Test log','success');
        ResourceUtils.reloadResource();
    }
    update(deltaTime: number) {
        
    }
}


