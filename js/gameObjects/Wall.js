import { BaseObject } from "./BaseObject.js";

export class Wall extends BaseObject {
    constructor(name, position, tileSize) {
        super(name, position, tileSize, 'wall.png');
    }
    draw(ctx) {
        ctx.drawImage(
            this.sprite,
            this.position.x * this.tileSize,
            this.position.y * this.tileSize,
            this.tileSize,
            this.tileSize
        ) 
    }
}