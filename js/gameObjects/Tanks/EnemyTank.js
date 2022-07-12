import { Tank } from "./Tank.js";




export class EnemyTank extends Tank {

    constructor(name, position) {
        super(name, position, 'enemy-tank.png', "down");
        
    }

    move() {
       this.direction[this.orientation]();
    }
   

   
}


