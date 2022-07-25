import { Tank } from "./Tank.js";
import { PlayerInputs } from "../../helper/PlayerInputs.js";

export class PlayerTank extends Tank {
    constructor(name, position) {
        super(name, position, 'player-tank.png', "up");
        this.newDirectionProvider = new PlayerInputs(this);
        this.isShooting = false;
        this.spacePushed = false;
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