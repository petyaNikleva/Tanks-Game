import { Tank } from "./Tank.js";

export class PlayerTank extends Tank {
    constructor(name, position, tileSize) {
        super(name, position, tileSize, 'player-tank.png', "up");
    }

    move() {

    }
   
}