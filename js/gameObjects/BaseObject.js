import { possibleDirections } from "../helper/possibleDirections.js";

export class BaseObject {
    //#orientation;
    constructor(name, position, picture, orientation) {
        this.name = name;
        this.position = position; // {x: 0, y: 10}
        this.picture = picture;
        this.#createSprite();
        //this.#orientation = orientation;

        this.speed = 1;

        this.direction = {
            [possibleDirections.up]: {
               "forward": () => this.position.y -= this.speed,
               "back": () => this.position.y += this.speed,
               "getNextPosition": {
                x: this.position.x,
                y: this.position.y - this.speed,
               } 
            },
            [possibleDirections.right]: {
                "forward": () => this.position.x += this.speed,
                "back": () => this.position.x -= this.speed,
                "getNextPosition": this.position.x + this.speed,
            },
            [possibleDirections.down]: {
                "forward": () => this.position.y += this.speed,
                "back": () => this.position.y -= this.speed,
                "getNextPosition": {
                    x: this.position.x,
                    y: this.position.y + this.speed,
                } 
            },
            [possibleDirections.left]: {
                "forward": () => this.position.x -= this.speed,
                "back": () => this.position.x += this.speed,
                "getNextPosition": this.position.x - this.speed,
            }
        }
    }

    #createSprite() {
        this.sprite = new Image();
        this.sprite.src = `../img/${this.picture}`
    }

    //  get orientation() {
    //     return this.#orientation;
    // }

    // set orientation(newOrientation) {
    //     if (this.direction[newOrientation]) {
    //         this.#orientation = newOrientation;
    //     }
    // }
}










