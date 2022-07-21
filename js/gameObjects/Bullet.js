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

    // isCollised(walls, gameMap, gameBullets) {
    //     super.isCollised(walls, gameMap);
    //     let index = gameBullets.indexOf(this);
    //     indexes.push(index);

    //     if (indexes.length > 0) {
    //         indexes.forEach(index => delete game.bullets[index]);
    //         console.log(game.bullets);
    //         let filtered = game.bullets.filter(element => element !== undefined);
    //         game.bullets = filtered;
    //     }
    // }

}