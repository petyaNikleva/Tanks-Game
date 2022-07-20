import { possibleDirections } from "../helper/possibleDirections.js";

export class BaseObject {
    constructor(name, position, picture) {
        this.name = name;
        this.position = position;
        this.picture = picture;
        this.#createSprite();
        this.speed = 1;

        this.direction = {
            [possibleDirections.up]: {
                "forward": (speed) => this.position.y -= speed,
                "back": (speed) => this.position.y += speed,
                "getNextPosition": (speed) => {
                    return {
                        x: this.position.x,
                        y: this.position.y - speed,
                    }
                }
            },
            [possibleDirections.right]: {
                "forward": () => this.position.x += this.speed,
                "back": () => this.position.x -= this.speed,
                "getNextPosition": (speed) => {
                    return {
                        x: this.position.x + speed,
                        y: this.position.y
                    }
                } 
            },
            [possibleDirections.down]: {
                "forward": (speed) => this.position.y += speed,
                "back": (speed) => this.position.y -= speed,
                "getNextPosition": (speed) => {
                    return {
                        x: this.position.x,
                        y: this.position.y + speed
                    }
                }
            },
            [possibleDirections.left]: {
                "forward": () => this.position.x -= this.speed,
                "back": () => this.position.x += this.speed,
                "getNextPosition": (speed) => {
                    return {
                        x: this.position.x - speed,
                        y: this.position.y
                    }
                } 
            }
        }
    }

    #createSprite() {
        this.sprite = new Image();
        this.sprite.src = `../img/${this.picture}`
    }


}










