import { Tank } from "./Tank.js";

export class EnemyTank extends Tank {

    constructor(name, position) {
        super(name, position, 'enemy-tank.png', "down");
        
    }

    move() {
       this.direction[this.orientation]();
    }
   
    moveBack() {
        super.moveBack();
        this.#changeOrientationRandomly(); 
    }
    #changeOrientationRandomly() {
        const dir = ["up" ,"right", "down", "left"];
        const random = Math.floor(Math.random() * dir.length);
        const randomOrientation = dir[random];
        this.orientation = randomOrientation;
    }
   
}


