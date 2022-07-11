import { BaseObject } from "./BaseObject.js";

export class Wall extends BaseObject {
    constructor(name, position) {
        super(name, position, 'wall.png');
    }
}