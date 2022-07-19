import { BaseObject } from "./BaseObject.js";

export class Bullet extends BaseObject{
    #tankOrientation
    constructor(name, position, orientation) {
        super(name, position, 'bullet.png', orientation, );
        this.position = position;
        this.orientation = orientation;
    }

    // get orientation() {
    //     return this.#orientation;
    // }

    // set orientation(newOrientation) {
    //     if (this.direction[newOrientation]) {
    //         this.#orientation = newOrientation;
    //     }
    // }
}