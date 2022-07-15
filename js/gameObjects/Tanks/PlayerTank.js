import { Tank } from "./Tank.js";
import { DirectionInput } from "../../helper/DirectionInput.js";

export class PlayerTank extends Tank {
    constructor(name, position) {
        super(name, position, 'player-tank.png', "up");
        this.newDirectionProvider = new DirectionInput();
    }
  

    move() {
        const newDirection = this.newDirectionProvider.direction;
        if (newDirection === this.orientation) {
            this.oldPosition.x = this.position.x;
            this.oldPosition.y = this.position.y;
            this.direction[this.orientation]();
        } else if (newDirection) {
            this.oldPosition.x = this.position.x;
            this.oldPosition.y = this.position.y;
            this.orientation = newDirection;
        } else {
            this.oldPosition.x = this.position.x;
            this.oldPosition.y = this.position.y;
        }
    }
   
}