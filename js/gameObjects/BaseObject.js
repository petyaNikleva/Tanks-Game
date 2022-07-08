export class BaseObject {
    constructor(name, position, tileSize, picture) {
        this.name = name;
        this.position = position; // {x: 0, y: 10}
        this.picture = picture;
        this.tileSize = tileSize; // remove
        this.#createSprite();
    }

    #createSprite() {
        this.sprite = new Image();
        this.sprite.src = `../img/${this.picture}`
    }
}










