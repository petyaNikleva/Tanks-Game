import { BaseObject } from "../BaseObject.js";
import { movingDirections } from "../../helper/movingDirections.js";

export class Tank extends BaseObject {
    #orientation;
    constructor(name, position, picture, orientation) {
        super(name, position, picture);
        this.oldPosition = {
            x: this.position.x,
            y: this.position.y

        }
       
        this.#orientation = orientation;
        this.speed = 1;

        this.direction = {
            [movingDirections.up]: () => this.position.y -= this.speed,
            [movingDirections.right]: () => this.position.x += this.speed,
            [movingDirections.down]: () => this.position.y += this.speed,
            [movingDirections.left]: () => this.position.x -= this.speed
        }
        this.backDirection = {
            [movingDirections.up]: () => this.position.y += this.speed,
            [movingDirections.right]: () => this.position.x -= this.speed,
            [movingDirections.down]: () => this.position.y -= this.speed,
            [movingDirections.left]: () => this.position.x += this.speed,
        }
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
    }

    moveBack() {
        this.backDirection[this.orientation]();
    }

    isCollised(walls, gameMap) {
        const collision = walls.some(wall => wall.position.x === this.position.x && wall.position.y === this.position.y);
        const notIinRange = this.position.x < 0 || this.position.x > gameMap.width || this.position.y < 0 || this.position.y > gameMap.height;
        if (collision || notIinRange) {
            return true;
        }
    }

    shoot() {
    }
}
