import { BaseObject } from "./BaseObject.js";

export class Bullet extends BaseObject {
    constructor(name, position, orientation, owner) {
        super(name, position, 'bullet.png');
        this.position = position;
        this.orientation = orientation;
        this.oldPosition = {
            x: this.position.x,
            y: this.position.y
        }
        this.owner = owner;
    }

    move() {
        this.oldPosition.x = this.position.x;
        this.oldPosition.y = this.position.y;
        this.direction[this.orientation].forward(this.speed);
    }

}