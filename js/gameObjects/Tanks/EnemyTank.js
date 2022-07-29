import { Tank } from "./Tank.js";
import { possibleDirections } from "../../helper/possibleDirections.js";
import { objectTypes } from "../../helper/objectTypes.js";

export class EnemyTank extends Tank {

    constructor(name, position) {
        super(name, position, 'enemy-tank.png', "down", objectTypes.enemyTank);
    }

    move() {
        super.move();
        this.direction[this.orientation].forward(this.speed);
    }

    moveBack() {
        super.moveBack();
        this.#changeOrientationRandomly();
    }
    #changeOrientationRandomly() {
        const dir = Object.keys(possibleDirections);
        const random = Math.floor(Math.random() * dir.length);
        const randomOrientation = dir[random];
        this.orientation = randomOrientation;
    }

    checkIsFriendlyFire(bullet) { // Tank class get only bullet and returns true 
         if (bullet.owner instanceof EnemyTank) {
            return true;
        }
    }

}


