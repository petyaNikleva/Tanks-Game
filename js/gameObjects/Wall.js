import { BaseObject } from "./BaseObject.js";
import { objectTypes } from "../helper/objectTypes.js";

export class Wall extends BaseObject {
    constructor(name, position) {
        super(name, position, 'wall.png', objectTypes.wall);
    }
}