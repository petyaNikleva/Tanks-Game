import { BaseObject } from "./BaseObject.js";

export class Wall extends BaseObject {
    constructor(name, position, tileSize) {
        super(name, position, tileSize, 'wall.png');
    }
}