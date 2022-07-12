import { Tank } from "./Tank.js";

export class PlayerTank extends Tank {
    constructor(name, position) {
        super(name, position, 'player-tank.png', "up");
    }
  

    move(keyboardInput) {
        if (keyboardInput === this.orientation) {
            this.direction[this.orientation]();
        } else if (keyboardInput) {
            this.orientation = keyboardInput;
        }
    }
   
}