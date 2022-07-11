import { Tank } from "./Tank.js";

export class PlayerTank extends Tank {
    constructor(name, position) {
        super(name, position, 'player-tank.png', "up");
    }

    move() {

    }
   
}