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
        //this.speed = 1;
    }

    move() {
        this.oldPosition.x = this.position.x;
        this.oldPosition.y = this.position.y;
        this.direction[this.orientation].forward(this.speed);
    }

    isCollided(walls, gameMap, tanks) {
        super.isCollided(walls, gameMap, tanks);
        const collidedObject = tanks.find(tank => tank.position.x === this.position.x && tank.position.y === this.position.y) 
                        || walls.find(wall => wall.position.x === this.position.x && wall.position.y === this.position.y);
        const notIinRange = this.position.x < 0 || this.position.x > gameMap.width || this.position.y < 0 || this.position.y > gameMap.height;
        if (collidedObject || notIinRange) {
            return {
                collidedObject
            }
        }
    }

}