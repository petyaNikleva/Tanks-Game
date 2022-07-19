import { BaseObject } from "./BaseObject.js";

export class Bullet extends BaseObject{
    constructor(name, position) {
        super(name, position, 'bullet.png', "down");
        this.position = position;
        //this.bulletSpeed = 2;
        
    }
}