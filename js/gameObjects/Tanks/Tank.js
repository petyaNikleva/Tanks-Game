import { BaseObject } from "../BaseObject.js";

export class Tank extends BaseObject {
    #orientation;
    constructor(name, position, picture, orientation) {
        super(name, position, picture);
        this.#orientation = orientation;
        
        this.direction = {
            "up": () => this.position.y -= 1,
            "right": () => this.position.x += 1,
            "down": () => this.position.y += 1,
            "left": () => this.position.x -= 1
        }
        this.backDirection = {
            "up": () => this.position.y += 1,
            "right": () => this.position.x -= 1,
            "down": () => this.position.y -= 1,
            "left": () => this.position.x += 1
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
