import { Tank } from "./Tank.js";

export class EnemyTank extends Tank {
    constructor(name, position, tileSize) {
        super(name, position, tileSize, 'enemy-tank.png', "down");
    }

    move() {
        if(this.orientation === "up") {            
            this.position.y -= 1;
        } else if(this.orientation === "right") {
            this.position.x += 1;
        } else if(this.orientation === "down") {
            this.position.y += 1; 
        } else if(this.orientation === "left") {
            this.position.x += 1;
        }
    }
    
    
}


