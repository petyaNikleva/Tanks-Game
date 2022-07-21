import { BaseObject } from "./BaseObject.js";

export class Bullet extends BaseObject {
    constructor(name, position, orientation) {
        super(name, position, 'bullet.png', orientation,);
        this.position = position;
        this.orientation = orientation;
        this.oldPosition = {
            x: this.position.x,
            y: this.position.y
        }
        this.speed = 1;
    }

    move() {
        this.oldPosition.x = this.position.x;
        this.oldPosition.y = this.position.y;
        this.direction[this.orientation].forward(this.speed);
    }

    isCollised(walls, gameMap, tanks) {
        super.isCollised(walls, gameMap);
        
    }

    // updateGameBullets(gameBullets) {
    //     let index = gameBullets.indexOf(this);
    //     delete gameBullets[index];
    //     let filtered = gameBullets.filter(element => element !== undefined);
    //     gameBullets = filtered;
    //     return gameBullets;
    // }

}