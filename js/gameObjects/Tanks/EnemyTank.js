import { Tank } from "./Tank.js";
import { movingDirections } from "../../helper/movingDirections.js";

export class EnemyTank extends Tank {

    constructor(name, position) {
        super(name, position, 'enemy-tank.png', "down");
    }

    move() {
        this.oldPosition.x = this.position.x;
        this.oldPosition.y = this.position.y;
        this.direction[this.orientation].forward();
    }

    moveBack() {
        super.moveBack();
        this.#changeOrientationRandomly();
    }
    #changeOrientationRandomly() {
        const dir = Object.keys(movingDirections);
        const random = Math.floor(Math.random() * dir.length);
        const randomOrientation = dir[random];
        this.orientation = randomOrientation;
    }

}


