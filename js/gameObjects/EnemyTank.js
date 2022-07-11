import { Tank } from "./Tank.js";


export class EnemyTank extends Tank {
    #direction = {
        "up": () => this.position.y -=1,
        "right": () => this.position.x += 1,
        "down": () => this.position.y += 1,
        "left": () => this.position.x += 1
    }

    constructor(name, position) {
        super(name, position, 'enemy-tank.png', "down");
    }

    move() {
       this.#direction[this.orientation]();
    }
}


