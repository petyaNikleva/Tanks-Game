import { BaseObject } from "./BaseObject.js";

export class Tank extends BaseObject {
    #orientation;
    constructor(name, position, tileSize, picture, orientation) {
        super(name, position, tileSize, picture);
        this.#orientation = orientation;
    }
    draw(ctx) {
        let angleInRadians = this.orientationInRadians;
        let x = (this.position.x * this.tileSize) + this.tileSize / 2;
        let y = (this.position.y * this.tileSize) + this.tileSize / 2
        ctx.translate(x, y);
        ctx.rotate(angleInRadians);

        ctx.drawImage(
            this.sprite,
            -this.tileSize / 2,
            -this.tileSize / 2,
            this.tileSize, //width
            this.tileSize  //height  
        ) 
        ctx.rotate(-angleInRadians)    
        ctx.translate( -x, -y);
    }

    get orientationInRadians() {
        if (this.#orientation === "left") {
            return Math.PI*1.5;
        } else if (this.#orientation === "up") {
            return 0;
        } else if (this.#orientation === "right") {
            return Math.PI/2;
        } else { // down
            return Math.PI;
        }
    }

    get orientation() {
        return this.#orientation;
    }

    set orientation(newOrientation) {
        if (newOrientation === "left" 
        || newOrientation === "up"
        || newOrientation === "right"
        || newOrientation === "down") {
            this.#orientation = newOrientation;
        }
    }

    // move() {
    //     if(this.orientation === "up") {            
    //         this.position.y -= 1;
    //     } else if(this.orientation === "right") {
    //         this.position.x += 1;
    //     } else if(this.orientation === "down") {
    //         this.position.y += 1; 
    //     } else if(this.orientation === "left") {
    //         this.position.x += 1;
    //     }
    // }

}
