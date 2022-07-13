import { BaseObject } from "../BaseObject.js";
import { movingDirections } from "../../helper/movingDirections.js";

export class Tank extends BaseObject {
    #orientation;
    constructor(name, position, picture, orientation) {
        super(name, position, picture);
        this.#orientation = orientation;

        this.direction = {
            [movingDirections.up]: () => this.position.y -= 1,
            [movingDirections.right]: () => this.position.x += 1,
            [movingDirections.down]: () => this.position.y += 1,
            [movingDirections.left]: () => this.position.x -= 1
        }
        this.backDirection = {
            [movingDirections.up]: () => this.position.y += 1,
            [movingDirections.right]: () => this.position.x -= 1,
            [movingDirections.down]: () => this.position.y -= 1,
            [movingDirections.left]: () => this.position.x += 1
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
