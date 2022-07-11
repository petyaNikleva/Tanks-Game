export class BaseObject {
    constructor(name, position, picture) {
        this.name = name;
        this.position = position; // {x: 0, y: 10}
        this.picture = picture;
        this.#createSprite();
    }

    #createSprite() {
        this.sprite = new Image();
        this.sprite.src = `../img/${this.picture}`
    }
}










