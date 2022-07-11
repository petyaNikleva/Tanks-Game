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

    drawWallSprite(sprite, position) {
        this.ctx.drawImage(
            sprite,
            position.x * this.#tileSize,
            position.y * this.#tileSize,
            this.#tileSize,
            this.#tileSize
        )
    }

    drawTankSprite(sprite, position, orientation) {
        let angleInRadians = this.#orientationInRadians(orientation);
        let x = (position.x * this.#tileSize) + this.#tileSize / 2;
        let y = (position.y * this.#tileSize) + this.#tileSize / 2
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

    #orientationInRadians(orientation) {
        if (orientation === "left") {
            return Math.PI * 1.5;
        } else if (orientation === "up") {
            return 0;
        } else if (orientation === "right") {
            return Math.PI / 2;
        } else { // down
            return Math.PI;
        }
    }

    

}