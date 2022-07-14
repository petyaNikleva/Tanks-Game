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

    drawSprite(sprite, position, orientation) {
        if (!orientation) {
            this.ctx.drawImage(
                sprite,
                position.x * this.#tileSize,
                position.y * this.#tileSize,
                this.#tileSize,
                this.#tileSize
            )
        } else {
            const angleInRadians = this.#orientationInRadians[orientation];
            const x = (position.x * this.#tileSize) + this.#tileSize / 2;
            const y = (position.y* this.#tileSize) + this.#tileSize / 2
            this.ctx.translate(x, y);
            this.ctx.rotate(angleInRadians);
            this.ctx.drawImage(
                sprite,
                -this.#tileSize / 2,
                -this.#tileSize / 2,
                this.#tileSize,
                this.#tileSize
            )
            this.ctx.rotate(-angleInRadians)
            this.ctx.translate(-x, -y);
        }
    }
    

    #orientationInRadians = {
        "left": Math.PI * 1.5,
        "up": 0,
        "right": Math.PI / 2,
        "down": Math.PI
    }

}