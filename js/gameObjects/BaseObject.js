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
                "getPosition": (speed) => {
                    return {
                        x: this.position.x,
                        y: this.position.y,
                    }
                }
            },
            [possibleDirections.right]: {
                "forward": () => this.position.x += this.speed,
                "back": () => this.position.x -= this.speed,
                "getPosition": (speed) => {
                    return {
                        x: this.position.x,
                        y: this.position.y
                    }
                } 
            },
            [possibleDirections.down]: {
                "forward": (speed) => this.position.y += speed,
                "back": (speed) => this.position.y -= speed,
                "getPosition": (speed) => {
                    return {
                        x: this.position.x,
                        y: this.position.y
                    }
                }
            },
            [possibleDirections.left]: {
                "forward": () => this.position.x -= this.speed,
                "back": () => this.position.x += this.speed,
                "getPosition": (speed) => {
                    return {
                        x: this.position.x,
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

    isCollided(walls, gameMap, tanks) {
        const collisionWiwhWall = walls.some(wall => wall.position.x === this.position.x && wall.position.y === this.position.y);
        const notIinRange = this.position.x < 0 || this.position.x > gameMap.width || this.position.y < 0 || this.position.y > gameMap.height;
        const tanksToCheck = this.getTheRestOftanks(tanks);
        const collisionWithTank = tanksToCheck.some(tank => tank.position.x === this.position.x && tank.position.y === this.position.y);
        if (collisionWiwhWall || notIinRange || collisionWithTank) {
            return true;
        }
    }

    getTheRestOftanks(tanks) {
        const restOfTanks = [...tanks];
        for (let index = 0; index < tanks.length; index++) {
            const currentTank = tanks[index];
            if (currentTank.position.x === this.position.x  && currentTank.position.y === this.position.y) {
                restOfTanks.splice(index, 1);
                break;
            }
        }
       return restOfTanks;
    }
    

}










