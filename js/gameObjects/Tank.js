import { BaseObject } from "./BaseObject.js";

export class Tank extends BaseObject {
    #orientation;
    constructor(name, position, tileSize, picture, orientation) {
        super(name, position, tileSize, picture);
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
        if(this.orientation === "up") {            
            this.position.y -= 1;
        } else if(this.orientation === "right") {
            this.position.x += 1;
        } else if(this.orientation === "down") {
            this.position.y += 1; 
        } else if(this.orientation === "left") {
            this.position.x += 1;
        }
    }

}
