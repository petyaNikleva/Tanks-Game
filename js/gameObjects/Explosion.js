import { BaseObject } from "./BaseObject.js";
import { objectTypes } from "../helper/objectTypes.js"

export class Еxplosion extends BaseObject {
    constructor(name, position) {
        super(name, position, 'boom.png', objectTypes.explosion);
    }
}