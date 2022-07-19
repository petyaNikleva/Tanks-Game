import { possibleDirections } from "./possibleDirections.js";

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

    tankSprite(tank, deltaTime) {
        const angleInRadians = this.#orientationInRadians[tank.orientation];
        const intervalX = tank.oldPosition.x + deltaTime * (tank.position.x - tank.oldPosition.x);
        const intervalY = tank.oldPosition.y + deltaTime * (tank.position.y - tank.oldPosition.y);
        const x = (intervalX * this.#tileSize) + this.#tileSize / 2;
        const y = (intervalY * this.#tileSize) + this.#tileSize / 2
        this.ctx.translate(x, y);
        this.ctx.rotate(angleInRadians);
        this.drawImg(tank.sprite,
            -this.#tileSize / 2,
            -this.#tileSize / 2)
        this.ctx.rotate(-angleInRadians);
        this.ctx.translate(-x, -y);
    }

    bulletSprite(bullet, deltaTime) {
        const angleInRadians = this.#orientationInRadians[bullet.orientation];
        let x = (bullet.position.x * this.#tileSize) + this.#tileSize / 2;
        let y = (bullet.position.y * this.#tileSize) + this.#tileSize / 2;
        this.ctx.translate(x, y);
        this.ctx.rotate(angleInRadians);

        this.drawImg(
            bullet.sprite,
            -this.#tileSize / 2,
            -this.#tileSize / 2,
        )
        this.ctx.rotate(-angleInRadians)
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