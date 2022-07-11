import { BaseObject } from "./BaseObject.js";

export class Tank extends BaseObject {
    #orientation;
    constructor(name, position, picture, orientation) {
        super(name, position, picture);
        this.#orientation = orientation;
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

}
