import { Tank } from "./Tank.js";
import { DirectionInput } from "../../helper/DirectionInput.js";

export class PlayerTank extends Tank {
    constructor(name, position) {
        super(name, position, 'player-tank.png', "up");
        this.newDirectionProvider = new DirectionInput();
    }
  

    move() {
        super.move();
        const newDirection = this.newDirectionProvider.dir;
        if (newDirection === this.orientation) {
            this.direction[this.orientation].forward(this.speed);
        } else if (newDirection) {
            this.orientation = newDirection;
        } 
    } 
}