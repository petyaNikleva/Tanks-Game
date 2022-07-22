import { BaseObject } from "../BaseObject.js";
import { Bullet } from "../Bullet.js";

export class Tank extends BaseObject {
    #orientation;
    constructor(name, position, picture, orientation) {
        super(name, position, picture, orientation);
        this.oldPosition = {
            x: this.position.x,
            y: this.position.y
        }
        this.isShooting = false;
        this.speed = 1;
       
        this.#orientation = orientation;
    
    }

    get orientation() {
        return this.#orientation;
    }

    set orientation(newOrientation) {
        if (this.direction[newOrientation]) {
            this.#orientation = newOrientation;
        }
    }

    move() {
        this.oldPosition.x = this.position.x;
        this.oldPosition.y = this.position.y;
    }

    moveBack() {
        this.direction[this.orientation].back(this.speed);
        
    }

    isCollised(walls, gameMap) {
        const collision = walls.some(wall => wall.position.x === this.position.x && wall.position.y === this.position.y);
        const notIinRange = this.position.x < 0 || this.position.x > gameMap.width || this.position.y < 0 || this.position.y > gameMap.height;
        if (collision || notIinRange) {
            return true;
        }
    }

    shoot() {
        if (!this.isShooting)  {
            const nextPosition = this.direction[this.orientation].getNextPosition(this.speed);
            this.bullet = new Bullet (`${this.name}-bullet`, nextPosition, this.#orientation, this);
        }
        return this.bullet;
    }
}
