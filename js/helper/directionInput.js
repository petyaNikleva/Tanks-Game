import { movingDirections } from "./movingDirections.js";

export class DirectionInput {
    constructor() {
        this.heldDirections = [];

        this.map = {
            "ArrowUp": movingDirections.up,
            "ArrowDown": movingDirections.down,
            "ArrowLeft": movingDirections.left,
            "ArrowRight": movingDirections.right
        }
        this.#init();
    }

    get direction() {
        return this.heldDirections[0];
    }

    #init() {
        document.addEventListener("keydown", e => {
            const dir = this.map[e.code];
            if (dir && this.heldDirections.indexOf(dir) === -1) {
                this.heldDirections.unshift(dir);
            }
        });
        document.addEventListener("keyup", e => {
            const dir = this.map[e.code];
            const index = this.heldDirections.indexOf(dir);
            if (index > -1) {
                this.heldDirections.splice(index, 1);
            }
        })
    }
}