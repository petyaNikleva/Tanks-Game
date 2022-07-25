import { possibleDirections } from "./possibleDirections.js";
import { Еxplosion} from "../gameObjects/Explosion.js"

export class Drawer {
    #tileSize = 64;
    constructor(canvas, height, width) {
        canvas.height = height * this.#tileSize;
        canvas.width = width * this.#tileSize;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')
    }

    clearCanvas() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    wallSprite(wall) {
        this.drawImg(wall.sprite,
            wall.position.x * this.#tileSize,
            wall.position.y * this.#tileSize)
    }

    explosionSprite(explosion) {
        this.drawImg(explosion.sprite,
            explosion.position.x * this.#tileSize,
            explosion.position.y * this.#tileSize)
    }
    

    movableObjectSprite(movableObject, deltaTime) {
        const angleInRadians = this.#orientationInRadians[movableObject.orientation];
        const intervalX = movableObject.oldPosition.x + deltaTime * (movableObject.position.x - movableObject.oldPosition.x);
        const intervalY = movableObject.oldPosition.y + deltaTime * (movableObject.position.y - movableObject.oldPosition.y);
        const x = (intervalX * this.#tileSize) + this.#tileSize / 2;
        const y = (intervalY * this.#tileSize) + this.#tileSize / 2
        this.ctx.translate(x, y);
        this.ctx.rotate(angleInRadians);
        this.drawImg(movableObject.sprite,
            -this.#tileSize / 2,
            -this.#tileSize / 2)
        this.ctx.rotate(-angleInRadians);
        this.ctx.translate(-x, -y);
    }


    drawImg(sprite, dx, dy) {
        return this.ctx.drawImage(
            sprite,
            dx,
            dy,
            this.#tileSize,
            this.#tileSize
        )
    }

    #orientationInRadians = {
        [possibleDirections.left]: Math.PI * 1.5,
        [possibleDirections.up]: 0,
        [possibleDirections.right]: Math.PI / 2,
        [possibleDirections.down]: Math.PI
    }

}