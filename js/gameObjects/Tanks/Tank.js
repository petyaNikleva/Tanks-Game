import { BaseObject } from "../BaseObject.js";
import { possibleDirections } from "../../helper/possibleDirections.js";
import { Bullet } from "../Bullet.js";

export class Tank extends BaseObject {
    #orientation;
    constructor(name, position, picture, orientation) {
        super(name, position, picture, orientation);
        this.oldPosition = {
            x: this.position.x,
            y: this.position.y
        }
        this.bullet;
       
        this.#orientation = orientation;
        //this.speed = 1;

        // this.direction = {
        //     [possibleDirections.up]: {
        //        "forward": () => this.position.y -= this.speed,
        //        "back": () => this.position.y += this.speed,
        //        "getNextPosition": this.position.y - this.speed,
        //     },
        //     [possibleDirections.right]: {
        //         "forward": () => this.position.x += this.speed,
        //         "back": () => this.position.x -= this.speed,
        //         "getNextPosition": this.position.x + this.speed,
        //     },
        //     [possibleDirections.down]: {
        //         "forward": () => this.position.y += this.speed,
        //         "back": () => this.position.y -= this.speed,
        //         "getNextPosition": this.position.y + this.speed,
        //     },
        //     [possibleDirections.left]: {
        //         "forward": () => this.position.x -= this.speed,
        //         "back": () => this.position.x += this.speed,
        //         "getNextPosition": this.position.x - this.speed,
        //     }
        // }
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
        this.direction[this.orientation].back();
    }

    isCollised(walls, gameMap) {
        const collision = walls.some(wall => wall.position.x === this.position.x && wall.position.y === this.position.y);
        const notIinRange = this.position.x < 0 || this.position.x > gameMap.width || this.position.y < 0 || this.position.y > gameMap.height;
        if (collision || notIinRange) {
            return true;
        }
    }

    shoot() {
        if (!this.bullet)  {
            const nextPosition = this.direction[this.orientation].getNextPosition;
            this.bullet = new Bullet (`${this.name}-bullet`, nextPosition)
        }
        return this.bullet;
    }
}
