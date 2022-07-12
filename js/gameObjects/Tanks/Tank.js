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
        if (newOrientation === "left" 
        || newOrientation === "up"
        || newOrientation === "right"
        || newOrientation === "down") {
            this.#orientation = newOrientation;
        }
    }

    move() {
    }

    moveBack() {
        this.backDirection[this.orientation]();
    }

    
}
